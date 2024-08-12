import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import user1 from "./../../../assets/user1.svg"
import user2 from "./../../../assets/user2.svg"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Stories = ({ searchInput }) => {
  const stories = [
    {
      id: 1,
      src: user1,
      alt: "John Doe",
    },
    {
      id: 2,
      src: user2,
      alt: "Lara Mueller",
    },
  ]

  const filteredStories = stories.filter((story) =>
    story.alt.toLowerCase().includes(searchInput.toLowerCase())
  )
  return (
    <div className="text-start p-6 border-t border-gray-700">
      <div>
        <p className="text-xl font-medium">Stories</p>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white cursor-pointer">
            <FontAwesomeIcon className="text-[#26272D]" icon={faPlus} />
          </div>
          {filteredStories.map((story) => (
            <img
              key={story.id}
              className="w-12 h-12 rounded-full cursor-pointer hover:bg-[#8896e5] hover:shadow-lg hover:scale-[1.2] transition-all duration-200 ease-in-out"
              src={story.src}
              alt={story.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Stories
