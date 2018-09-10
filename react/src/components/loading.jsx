// Dependencies
import React from 'react';


function Loading(props) {
    return (
        <div className="loadingTheme">
            <style jsx>{`
                .loadingTheme {
                    border: 8px solid #f3f3f3;
                    border-radius: 50%;
                    border-top: 8px solid #3498db;
                    width: ${props.width}px;
                    height: ${props.height}px;
                    -webkit-animation: spin 1.5s linear infinite; /* Safari */
                    animation: spin 1.5s linear infinite;
                }
                @-webkit-keyframes spin {
                    0% { -webkit-transform: rotate(0deg); }
                    100% { -webkit-transform: rotate(360deg); }
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}
Loading.defaultProps = {
    width: '20',
    height: '20',
};
export default Loading;
