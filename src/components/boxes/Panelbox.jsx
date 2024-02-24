import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { SlHandbag } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoIosArrowRoundUp } from "react-icons/io";

const Panelbox = () => {
    return (
        <div class="row panelboxes">
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h3 ><div className='mainicons'><IoEyeOutline className='mainicon' /></div></h3>
                        <h5 class="card-title">$3.456K</h5>
                        <p class="card-text">Total views
                            <span className='arrowbuttons'>0.43%<IoIosArrowRoundUp /></span>

                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h3 ><div className='mainicons'><BsCart3 className='mainicon' /></div></h3>
                        <h5 class="card-title">$45,2K</h5>
                        <p class="card-text">Total Profit
                            <span className='arrowbuttons'>4.35%<IoIosArrowRoundUp /></span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h3 ><div className='mainicons'><SlHandbag className='mainicon' /></div></h3>
                        <h5 class="card-title">2.450</h5>
                        <p class="card-text">Total Product
                            <span className='arrowbuttons'>2.59%<IoIosArrowRoundUp /></span></p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body">
                        <h3 ><div className='mainicons'><HiOutlineUsers className='mainicon'/></div></h3>
                        <h5 class="card-title">3.456</h5>
                        <p class="card-text">Total Users
                            <span className='arrowbuttons'>0.95%<IoIosArrowRoundUp /></span>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Panelbox
