import React from 'react'


const commentData = [
    {
        name:"Kingsley Onuoha",
        text: "Lorem Ipsum has been the industry's standard dummy", 
        replies:[]
    },
    {
        name:"Kingsley Onuoha",
        text: "Lorem Ipsum has been the industry's standard dummy", 
        replies:[]
    },
    {
        name:"Kingsley Onuoha",
        text: "Lorem Ipsum has been the industry's standard dummy", 
        replies:[
            {
                name:"Akshay saini",
                text: "Lorem Ipsum has been the industry's standard dummy", 
                replies:[{
                    name:"Kingsley Onuoha",
                    text: "Lorem Ipsum has been the industry's standard dummy", 
                    replies:[{
                        name:"Akshay saini",
                        text: "Lorem Ipsum has been the industry's standard dummy", 
                        replies:[{
                            name:"Kingsley Onuoha",
                            text: "Lorem Ipsum has been the industry's standard dummy", 
                            replies:[]
                        },]
                    },]
                },]
            },
            {
                name:"Akshay saini",
                text: "Lorem Ipsum has been the industry's standard dummy", 
                replies:[{
                    name:"Akshay saini",
                    text: "Lorem Ipsum has been the industry's standard dummy", 
                    replies:[{
                        name:"Akshay saini",
                        text: "Lorem Ipsum has been the industry's standard dummy", 
                        replies:[]
                    },]
                },]
            },
            {
                name:"Akshay saini",
                text: "Lorem Ipsum has been the industry's standard dummy", 
                replies:[]
            },
        ]
    },
    {
        name:"Kingsley Onuoha",
        text: "Lorem Ipsum has been the industry's standard dummy", 
        replies:[]
    },
    {
        name:"Kingsley Onuoha",
        text: "Lorem Ipsum has been the industry's standard dummy", 
        replies:[]
    },
]

const Comment = ({data}) =>{
    const {name, text, replies} = data
return <div className='flex  py-5 bg-gray-200 rounded-xl p-2 my-2'>
    <img className=" w-6 h-6 " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnP7z4eskALryqEiK8X47vkR9-wpDMXwcVGZAWLbrPrDR4JM_tiDyZyTJhrsFyX8kRvRM&usqp=CAU' alt='user' />
    <div className='px-3 text-sm'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>
</div>
}

const CommentsList = ({comments}) =>{

    return comments.map((comment, index) =>(
            <div>
                <Comment key={index} data ={comment}/>
                <div className='pl-3 border ml-7 border-l-black'>
                    <CommentsList comments ={comment.replies}/>
                </div>
            </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='py-3'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentsList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer