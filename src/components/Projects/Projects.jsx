import React from 'react';
import pandacommerce from '../../assets/pandacommerce.png';
import emajohn from '../../assets/emajohn.png';
import cardoctor from '../../assets/cardoctor.png';
import shoppingcart from '../../assets/shoppingcart.png';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facilis similique sequi hic animi debitis quae repellendus neque accusantium consectetur laudantium, et a voluptatem ipsam esse explicabo nemo beatae eius!
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={cardoctor} title="CarDoctor" />
                <ProjectItem img={emajohn} title="Ema John" />
                <ProjectItem img={pandacommerce} title="Panda Commerce" />
                <ProjectItem img={shoppingcart} title="Shopping Cart" />
            </div>

        </div>
    )
}

export default Projects