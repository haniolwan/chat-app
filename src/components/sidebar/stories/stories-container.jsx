import { useState, useEffect } from "react"
import Stories from "./stories"
import StoriesSkeleton from "../../chat/skeleton/story-skeleton"

const StoriesContainer = ({ searchInput }) => {
  const [showStories, setShowStories] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowStories(true)
    }, 1500)
  }, [])

  return (
    <div>
      {!showStories && <StoriesSkeleton />}
      {showStories && <Stories searchInput={searchInput} />}
    </div>
  )
}

export default StoriesContainer
