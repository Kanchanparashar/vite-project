import React from 'react'

const Content = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-center p-4 md:p-8 text-white'>
        <p className='text-lg md:text-2xl mx-4 md:mx-8 mb-4 md:mb-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt provident earum quisquam cumque tempore repellendus quasi culpa ipsum, odit, sapiente iure? Officiis ab voluptatem est, nemo maxime inventore iste deserunt non autem temporibus, nobis, labore aut explicabo magnam sapiente omnis! Cumque magnam eveniet, eligendi distinctio voluptates aliquam eius, iure alias labore totam aliquid veritatis aspernatur iusto sequi assumenda pariatur itaque, minus enim! Et nemo ipsum reprehenderit dignissimos ea vitae accusamus exercitationem odio harum similique! Tempora, veritatis. Dicta illum adipisci temporibus soluta animi eaque praesentium corporis quos accusantium facere nihil alias aperiam aliquid quae, est debitis. Voluptates impedit dolore est quas!
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <img className='w-40 md:w-60 m-4 md:m-10 border-solid border-2 border-black-700' src="./images/page-1.jpg" alt="Page 1" />
        <img className='w-40 md:w-60 m-4 md:m-10 border-solid border-2 border-black-700' src="./images/page-2.jpg" alt="Page 2" />
        <img className='w-40 md:w-60 m-4 md:m-10 border-solid border-2 border-black-700' src="./images/page-3.jpg" alt="Page 3" />
      </div>
    </>
  )
}

export default Content