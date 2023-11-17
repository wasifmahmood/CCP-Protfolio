import './Portfolio.css'
import { COLORS } from '../../constants/colors';

export default function Portfolio() {
    return (
        <div className='portfolio p-5 rounded'
            style={{ backgroundColor: COLORS.primary }}
        >
            <div className='d-flex'>
                <div className='client text-center'>
                    <h1>80+</h1>
                    <h4>Satisfied Client</h4>
                </div>
                <div className='project text-center'>
                    <h1>200+</h1>
                    <h4>Projects Completed</h4>
                </div>
                <div className='reviews text-center'>
                    <h1>99+</h1>
                    <h4>Reviews given</h4>
                </div>
            </div>
        </div>
    )
}