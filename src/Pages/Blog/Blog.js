import React from 'react';

const Blog = () => {
    return (
        <div className='mt-16'>
            
            <div>
               <h1 className='text-2xl font-semibold'>Q1: How will you improve the performance of a React Application?</h1>
               <p className='mt-5'>Here are some important things to help improve the performance of react application </p>
                <div className='mt-5'>
                <p>1. Use lazy loading images while working with large sets of images </p> 
                <p>2. Avaoid unnecessary rendering its common mistake in react application</p> 
                <p>3. Prefer pagination instead of fetching all data</p>
                <p>4. Use Memoization to prefer tree shaking</p>
                <p>5. Avoid Inline Function Definition in the Render Function</p>
                </div>
            </div>

            <div className='mt-10'>
                <h1 className='text-2xl font-semibold mb-4' >Q2: What are the different ways to manage a state in a React application?</h1>
                <p className=''>There are four main types of state that  need to properly manage in  React application- 1. Local state, 2.Global state, 3.Server state, 4.URL state</p>
                <p>
                    In Local state is most often managed in React using the useState hook.Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.useState is the first tool you should reach for to manage state in your components.
                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state
                    URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname.


                </p>
            </div>

            <div className='mt-5'>
                <h1 className='text-2xl font-semibold mb-4'>Q3: How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects .prototypical inheritance refers to the ability to access object properties from another object. Each object has a private property which holds a link to another object called its prototype.</p>
            </div>


            <div className='mt-5'>
                <h1 className='text-2xl font-semibold mb-4'>Q4: What is a unit test? Why should write unit tests?</h1>
                <p>Unit testing is a software testing method where checking small pieces of code to deliver information early and often, speeding your testing strategies, and reducing wasted time.
                Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing
                     </p>

            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold mb-4'>Q5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p>I will use the Array.find() method to implement a search to find products bye name.
                     </p>

            </div>

        </div>
    );
};

export default Blog;