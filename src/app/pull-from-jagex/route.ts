import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const baseURL =
    "https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=?";
  const playerName = request.nextUrl.searchParams.get("player");
  if (playerName === null || playerName === undefined) {
    return createResponse("", 400);
  }
  // make sure the name provided is alphanumeric, and if a char isn't, drop it.
  const sanName = playerName
    .split("")
    .filter((x) => !/[^0-9a-z\s]/gi.test(x))
    .join("");
  if (sanName.length > 12 || sanName.includes("mod")) {
    return createResponse("", 400);
  }
  const apiResponse = await fetch(baseURL + sanName);
  if (apiResponse.status === 404) {
    createResponse("", 404);
  } else if (apiResponse.ok) {
    const responseText = await apiResponse.text();
    return createResponse(responseText, 200);
  } else {
    // we should never get here. if we are here, fuck
    return createResponse("", 500);
  }
}

function createResponse(body: string, statusCode: number): NextResponse {
  return new NextResponse(body, {
    status: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
