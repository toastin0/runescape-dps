import { ILevels } from './types'

export default function StatOverview({ levelState: levels }: {levelState: ILevels}) {
  return (
    <div className='player-stats'>
      <h3>Attack: {levels.attack}</h3>
      <h3>Strength: {levels.defence}</h3>
      <h3>Defence: {levels.defence}</h3>
      <h3>Ranged: {levels.ranged}</h3>
      <h3>Prayer: {levels.prayer}</h3>
      <h3>Magic: {levels.prayer}</h3>
      <h3>Hitpoints: {levels.hitpoints}</h3>
    </div>
  )
}