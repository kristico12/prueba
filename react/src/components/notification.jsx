// Dependencies
import React from 'react';

function Notification(props) {
    return (
        <div className='alert alertSuccess' role="alert">
            <button
                type="button"
                className="closeAlert"
                onClick={() => props.close()}
            >×</button>
           <img src='static/img/success.png' alt="success" />
            {props.info}
            <style jsx>{`
                .alert {
                    position: fixed;
                    bottom: 0;
                    right: 0;
                    min-width: 150px;
                    padding: 15px;
                    margin-bottom: 20px;
                    border: 1px solid transparent;
                    border-radius: 3px;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                    animation-name: animar;
                    animation-duration: 1s;
                }
                @keyframes animar{
                    0% {
                    bottom:0;
                    }
                    100% {
                    bottom:3rem;
                    }
                }
                .alert:hover {
                    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
                }
                .alertSuccess {
                    background-color: #0080c0;
                    border-color: #ffffff;
                    color: white;
                }
                .alert p {
                    padding: 0;
                    margin: 0;
                }
                .alert i {
                    padding-right: 5px;
                    vertical-align: middle;
                    font-size: 24px;
                }
                .alert .closeAlert {
                    -webkit-appearance: none;
                    position: relative;
                    float: right;
                    padding: 0;
                    border: 0;
                    cursor: pointer;
                    color: inherit;
                    background: 0 0;
                    font-size: 21px;
                    line-height: 1;
                    font-weight: bold;
                    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);
                    filter: alpha(opacity=40);
                    opacity: .4;
                }
                .alert .closeAlert:hover {
                    filter: alpha(opacity=70);
                    opacity: .7;
                }
            `}</style>
        </div>

    )
}

export default Notification;
