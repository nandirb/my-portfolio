import { Nunito_Sans } from "next/font/google"
const font = Nunito_Sans({
    weight: ['200', '400', '600'],
    subsets: ['latin'],
})
export const Card = ({date, title, content}) => {
    return <div className= {` bg-white shadow-md rounded-lg w-60 border-2 m-1`}>
      <div className={`p-4 ${font.className}`}>
      <h1 className={`text-xlarge uppercase font-extrabold mb-3`}>{title}</h1>
        <span className={font.className}>
        {content}
        </span>
      </div>
      <div className="p-1">
      {['#random', '#book'].map((tag, i) => <Tag key={i} tag={tag} />)}
      </div>
        <div className="border-t-2 border-gray-300 bg-gray-100 p-2 pl-3">
            <span class="badge badge-pill badge-light">📅 {date}</span>
        </div>
    </div>
}

const Tag = ({tag, color}) => (<small className={`px-2 py-1 m-1 rounded-full bg-green-600 text-white`}>{tag}</small>)