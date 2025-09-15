import { Link } from "react-router-dom";

function PostCard({ title, content, image, author, _id }) {
  return (
    <div className="rounded-md shadow-md max-w-xs border border-gray-300 overflow-hidden">
      <div className="h-50 bg-red-200">
        <img
          src={image?.url ? image.url : "./postcardimg.webp"}
          alt="postcardimg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <Link to={`/post/${_id}`}>
            <h1 className="text-2xl hover:text-primary font-semibold cursor-pointer line-clamp-2">
              {title}
            </h1>
          </Link>

          <p className="text-gray-500 text-sm line-clamp-3">{content}</p>
        </div>

        <div className="border border-gray-300 rounded my-4"></div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://github.com/shadcn.png" />
          </div>
          <div className="flex flex-col gap-0">
            <h5 className="text-sm ">{author.name}</h5>
            <h6 className="text-xs ">{author.email}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
