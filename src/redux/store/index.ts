import { configureStore } from '@reduxjs/toolkit'
import resourceSlice from '../slices/resourceSlice'
import vocabularySlice from '../slices/vocabularySlice'
import creatureSlice from '@Redux/slices/creatureSlice'
import monsterSlice from '@Redux/slices/monsterSlice'
import challengeSlice from '@Redux/slices/challengeSlice'

export const store = configureStore({
  reducer: {
    resource: resourceSlice,
    vocabulary: vocabularySlice,
    creature: creatureSlice,
    monsters: monsterSlice,
    challenges: challengeSlice
  }
})
