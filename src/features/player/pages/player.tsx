import { Media, Player as MediaPlayer } from 'react-media-player'

import logo from 'features/player/assets/logo.png'

import { PlayerPoseDetection } from 'features/player/components/player-pose-detection/player-pose-detection'
import { PLAYER_CONSTANTS } from 'features/player/constants/player.constants'

import styles from './player.module.scss'

export const Player = () => {
  return (
    <div className={styles.parent}>
      <img src={logo} className={styles.parentLogo} alt={PLAYER_CONSTANTS.LOGO} />
      <PlayerPoseDetection />
      <Media>
        <MediaPlayer className={styles.parentPlayer} src={PLAYER_CONSTANTS.VIDEO_SRC} />
      </Media>
    </div>
  )
}
