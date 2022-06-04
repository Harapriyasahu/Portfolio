import React, { useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './TechStacks.module.css';
import {
    DiJavascript1,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiReact,
    DiRedux,
    DiNodejs,
    DiExpress,
    DiMongodb,
    DiPython,
    DiGit,
  } from "react-icons/di";


const TechStacks = () => {
	const { newTheme } = useContext(ThemeContext);
	return (
		<div
			data-aos='fade-right'
			data-aos-offset='200'
			data-aos-easing='ease-in-sine'
			data-aos-duration='800'
		>
			<h1
				style={{ color: `${newTheme.title}` }}
				className={styles.heading}
			>
				Skills
			</h1>
			<div className={styles.borderBottom} />
			
			<div className={styles.container}>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-html5-plain colored' /> */}
					<DiHtml5 />
                    <span>HTML</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-css3-plain colored' /> */}
					<DiCss3 />
                    <span>CSS</span>
				</div>
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-javascript-plain colored' /> */}
                    <DiJavascript1 />
					<span>Javascript</span>
				</div>

                <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-react-original colored' /> */}
					< DiBootstrap />
                    <span>Bootstrap</span>
				</div>

				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-react-original colored' /> */}
					<DiReact />
                    <span>React</span>
				</div>
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					<i
						style={{ color: '#7248B6' }}
						className='devicon-redux-original'
					/>
					
                    <span>Redux</span>
				</div> */}
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i
						style={{ color: '#509941' }}
						className='devicon-nodejs-plain'
					/> */}
					
					<DiNodejs />
                    <span>Node</span>
				</div>
				{/* <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					// <i className='devicon-express-original' />
					
                    <span>Express</span>
				</div> */}
				<div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-mongodb-plain colored' /> */}
					<DiMongodb />
                    <span>MongoDB</span>
				</div>

                <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-mongodb-plain colored' /> */}
					<DiPython />
                    <span>Python</span>
				</div>

                <div
					style={{
						color: `${newTheme.title}`,
						background: `${newTheme.linkHover}`,
						height:"100px"
					}}
					className={styles.logoWrapper}
				>
					{/* <i className='devicon-mongodb-plain colored' /> */}
					
					<DiGit />
					
                    <span>Git</span>
				</div>
			</div>
		</div>
	);
};

export default TechStacks;