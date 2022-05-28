import React from 'react';


const Portfolio = () => {
    return (
        <div className='border-4 p-8 mt-10'>
            
            <div className='flex justify-between '>
                <div>
                 <h1 className='text-2xl font-bold' >ATIQUR RAHMAN</h1>
                 <h2 className='text-2xl font-bold'>Jr. MERN Stack Developer</h2>
                 <div className='flex gap-x-4'>
                      

                     <a className='text-blue-500 font-bold' href="https://52atiq.github.io/Atiqur-Rahman-Portfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                     <a className='text-blue-500 font-bold' href="https://www.linkedin.com/in/atiqur-rahman-05a49621a/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                     <a className='text-blue-500 font-bold' href="https://www.facebook.com/atiqislambd" target="_blank" rel="noopener noreferrer"> Facebook</a>
                     <a className='text-blue-500 font-bold' href="https://github.com/52atiq" target="_blank" rel="noopener noreferrer"> GitHub</a>
                   
                 </div>
                </div>


                <div>
                    <h2>76/3 ,Kanikaloy 8 no. lane</h2>
                    <h2>Basabo, Kadamtola, Dhaka-1214</h2>
                    <h2>Email: atiqit52@gmail.com</h2>
                    <h2>Mobile: +8801738450678</h2>
                </div>
            </div>
  <hr />
            <div  className='grid lg:grid-cols-2 mt-10' >
                <div className='w-[300px]'> 
                    <h1 className='text-2xl font-bold mb-4 '>SKILLS</h1>
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Expert:</h2>
                        <p>HTML5, CSS3, Bootstrap,
                            JavaScript, ES6, ReactJS,
                            DaisiUI, Tailwindcss JSON, Rest API.</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Familiar :</h2>
                        <p>NodeJS, Express, MongoDB, Firebase, UI/UX.</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold mb-4'>Tools:</h2>
                        <p>Git, VSCode, Netlify, Heroku</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mt-4'>Education</h1>
                        <p>Department of CSE</p>
                        <p>Stamford University bangladesh</p>
                    </div>
                </div>
                <div> 
                 <h1 className='text-2xl font-bold mb-4'>PROJECTS</h1>
                   <div className='mb-10'>
                       <div className='flex justify-between'>
                           <h1>STORE-HOUSE</h1>
                           <a className='text-blue-500 font-bold' href="https://electronics-87081.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
                       </div>
                       <div>
                           <h2 className='text-2xl font-bold mb-4'>Features:</h2>
                           <p>This Website about Warehouse management system</p>
                           <p>For authentication used firebase</p>
                           <p>User can add item delete item</p>
                       </div>
                       <div>
                           <h2  className='text-2xl font-bold mb-4'>Technology Used:</h2>
                           <p>React Js, Bootstrap, Node Js, Express Js, MongoDB, Firebase.</p>
                       </div>
                   </div>

                   <div className='mb-10'>
                       <div className='flex justify-between'>
                           <h1>I-PHOTO</h1>
                           <a className='text-blue-500 font-bold' href="https://photographer-d5ce8.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Live Link </a>
                       </div>
                       <div>
                           <h2 className='text-2xl font-bold mb-4'>Features:</h2>
                           <p>this website about photographer</p>
                           <p>authentication by firebase</p>
                           <p>added blog page , service page</p>
                       </div>
                       <div>
                           <h2  className='text-2xl font-bold mb-4'>Technology Used:</h2>
                           <p>React Js, Bootstrap, Firebase.</p>
                       </div>
                   </div>

                   <div>
                       <div className='flex justify-between'>
                           <h1>Tshirt Bazar</h1>
                           <a className='text-blue-500 font-bold' href="https://tshirt-bazar.netlify.app/" target="_blank" rel="noopener noreferrer"> Live link</a>
                           
                       </div>
                       <div>
                           <h2 className='text-2xl font-bold mb-4'>Features:</h2>
                           <p>This project about tshirt sell created by react some react features such as useSate, custom Hook</p>
                           <p>Added chart used recharts</p>
                           <p>Added a Blog page</p>
                       </div>
                       <div>
                           <h2  className='text-2xl font-bold mb-4'>Technology Used:</h2>
                           <p>React Js, Bootstrap, reactChart</p>
                       </div>
                   </div>


                </div>
            </div>


        </div>
    );
};

export default Portfolio;