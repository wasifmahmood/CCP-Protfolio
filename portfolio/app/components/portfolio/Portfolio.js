import './Portfolio.css'
import { COLORS } from '../../constants/colors';
import { HiOutlineEllipsisVertical } from 'react-icons/Hi';

export default function Portfolio() {
    return (
        <div className='portfolio p-5'
            style={{ backgroundColor: COLORS.primary }}
        >
            <div className='d-flex'>
                <div className='client'>
                    <div>80+</div>
                    <div>Satisfied Client</div>
                    {/* <HiOutlineEllipsisVertical/> */}
                </div>
                <div className='project'>
                    <div>200+</div>
                    <div>Projects Completed</div>
                    {/* <HiOutlineEllipsisVertical/> */}
                </div>
                <div className='reviews'>
                    <div>99+</div>
                    <div>Reviews given</div>
                </div>
            </div>
        </div>
    )
}