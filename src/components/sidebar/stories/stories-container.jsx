import { useState, useEffect } from "react"
import Stories from "./stories"
import StoriesSkeleton from "../../chat/skeleton/story-skeleton"

const StoriesContainer = () => {
  const [showStories, setShowStories] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowStories(true)
    }, 1500)
  }, [])

  return (
    <div>
      {!showStories && <StoriesSkeleton />}
      {showStories && <Stories />}
    </div>
  )
}

export default StoriesContainer
