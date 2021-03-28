import React from 'react';
import { SvgIcon} from '@material-ui/core';
import skillList from '../../Utils/Skills/Skills'

const Skills=()=>{
	return (
		<div className='tc bg-white pv3' id='skills'>
            <h1 className='tc ttu tracked-mega underline avenir pv3'>Skills</h1>
			<div className='flex flex-wrap justify-center'>
				{skillList.map((skill, i) => (
					<div className='h3 w4' key={i}>
						<SvgIcon
							titleAccess={skill.name}
							style={{ width: 'auto', height: '100%' }}
							className='pa0 ma0'
							viewBox='0 0 24 24'
							color='primary'
						>
							<path d={skill.svgPath} />
						</SvgIcon>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;