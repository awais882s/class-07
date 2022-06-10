import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Sections() {
    const ctaHandler = () => {
        toast.success('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    return (
        <div>
            Sections
            <h4 className='text-dark'>How to Make Automation In Firebase</h4>
            <p className='text-dark'>1.1st you go firebase hosting folder where you deploy already website <br />

                2.Copy file firebase.json and .firebaserc into main folder <br />
                3.Open file firebase.json where build you type (&& firebase deploy)<br />
                4.Again npm run build command
            </p>
            <button type="button" class="btn btn-warning" onClick={ctaHandler}>
                Call to Actions
            </button>
        </div>
    )
}
