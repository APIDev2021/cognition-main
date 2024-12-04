import clsx from 'clsx';
import { useState } from 'react';
import { PopupOverlay } from '../../../enums/PopupOverlay';
import { CURRENT_ACCENT } from '../../../graphics/helpers/LandingTheme';
import { setCurrentOverlay } from '../../../store/page';
import { Button } from '../../shared/Button/Button';
import './FollowScreen.scss';

export function FollowScreen() {
    const [hover, setHover] = useState(false);

    const openTwitter = () => {
        window.open('https://t.me/CognitionAI', '_blank')?.focus();
    };

    return (
        <div id="follow-screen">
            <div className="wrap">
                <div className="title">
                    Follow us
                </div>
                <div className="buttons">
                    <Button directContent disabled>
                        <svg width="34" height="26" viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.6958 2.2074C26.5447 1.21462 24.2379 0.483181 21.8261 0.0642573C21.7822 0.0561722 21.7383 0.0763773 21.7157 0.116788C21.419 0.647513 21.0904 1.33989 20.8603 1.88409C18.2662 1.49346 15.6854 1.49346 13.1445 1.88409C12.9143 1.32779 12.5738 0.647513 12.2758 0.116788C12.2532 0.0777256 12.2093 0.0575205 12.1654 0.0642573C9.75487 0.481842 7.44813 1.21328 5.29569 2.2074C5.27706 2.21548 5.26108 2.22896 5.25048 2.24646C0.875082 8.82135 -0.323524 15.2346 0.264472 21.5684C0.267133 21.5994 0.284426 21.629 0.308372 21.6479C3.19514 23.7802 5.99146 25.0747 8.73586 25.9328C8.77978 25.9463 8.82632 25.9301 8.85427 25.8937C9.50346 25.002 10.0822 24.0618 10.5783 23.073C10.6076 23.0151 10.5797 22.9464 10.5198 22.9235C9.6019 22.5733 8.72788 22.1463 7.88712 21.6614C7.82062 21.6223 7.81529 21.5266 7.87647 21.4808C8.0534 21.3475 8.23037 21.2087 8.39931 21.0686C8.42988 21.043 8.47247 21.0376 8.5084 21.0538C14.0318 23.5903 20.0115 23.5903 25.4698 21.0538C25.5057 21.0363 25.5483 21.0417 25.5802 21.0673C25.7492 21.2074 25.9261 21.3475 26.1044 21.4808C26.1656 21.5266 26.1616 21.6223 26.0951 21.6614C25.2543 22.1557 24.3803 22.5733 23.461 22.9222C23.4012 22.9451 23.3746 23.0151 23.4038 23.073C23.9107 24.0604 24.4894 25.0006 25.1266 25.8924C25.1532 25.9301 25.2011 25.9463 25.245 25.9328C28.0027 25.0747 30.799 23.7802 33.6858 21.6479C33.711 21.629 33.727 21.6007 33.7297 21.5697C34.4334 14.2472 32.551 7.88652 28.7397 2.2478C28.7304 2.22896 28.7144 2.21548 28.6958 2.2074ZM11.4032 17.7118C9.74023 17.7118 8.37003 16.1762 8.37003 14.2903C8.37003 12.4045 9.71366 10.8689 11.4032 10.8689C13.1059 10.8689 14.4629 12.418 14.4362 14.2903C14.4362 16.1762 13.0926 17.7118 11.4032 17.7118ZM22.6176 17.7118C20.9547 17.7118 19.5845 16.1762 19.5845 14.2903C19.5845 12.4045 20.9281 10.8689 22.6176 10.8689C24.3204 10.8689 25.6773 12.418 25.6507 14.2903C25.6507 16.1762 24.3204 17.7118 22.6176 17.7118Z" fill="#555565" />
                        </svg>
                    </Button>
                    <Button directContent onClick={openTwitter}>
                        <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.7137 3.78845C32.5198 4.30768 31.1554 4.65384 29.791 4.82692C31.1554 3.96154 32.3493 2.57693 32.861 1.01924C31.4965 1.88462 30.1321 2.40385 28.4266 2.75C27.2327 1.36539 25.3566 0.5 23.4805 0.5C19.7283 0.5 16.6583 3.61538 16.6583 7.42307C16.6583 7.9423 16.6583 8.46152 16.8289 8.98076C11.2006 8.6346 6.08398 5.86538 2.6729 1.71153C2.16124 2.74999 1.82013 3.96153 1.82013 5.17307C1.82013 7.59615 3.01402 9.67307 4.89011 10.8846C3.69623 10.8846 2.6729 10.5385 1.82013 10.0192C1.82013 13.3077 4.20788 16.25 7.27785 16.7692C6.76619 16.9423 6.08399 16.9423 5.40178 16.9423C4.89011 16.9423 4.549 16.9423 4.03734 16.7692C4.89011 19.5384 7.44842 21.6154 10.5184 21.6154C8.13064 23.5192 5.23122 24.5577 1.9907 24.5577C1.47903 24.5577 0.967372 24.5577 0.285156 24.3846C3.35513 26.2885 6.93676 27.5 10.8595 27.5C23.4805 27.5 30.3026 16.9423 30.3026 7.76922V6.90384C31.6671 6.38461 32.861 5.17306 33.7137 3.78845Z" fill="white" />
                        </svg>
                    </Button>
                    <Button directContent disabled>
                        <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.13301 17.0773L2.25111 16.8986L9.37237 6.17086C9.47645 6.0138 9.72112 6.03004 9.79985 6.20065C10.9896 8.76814 12.0161 11.9613 11.5352 13.9492C11.3299 14.7671 10.7674 15.8748 10.1345 16.8986C10.053 17.0476 9.96301 17.1938 9.86736 17.3346C9.82236 17.3996 9.74642 17.4375 9.66484 17.4375H2.34111C2.14424 17.4375 2.02893 17.2317 2.13301 17.0773Z" fill="#555565" />
                            <path d="M33.875 19.0706V20.7688C33.875 20.8662 33.8131 20.9529 33.7231 20.9908C33.1719 21.2183 31.2847 22.0525 30.5 23.1033C28.4975 25.7873 26.9675 29.625 23.5475 29.625H9.27966C4.22284 29.625 0.125 25.6654 0.125 20.7796V20.6225C0.125 20.4925 0.234663 20.3869 0.369675 20.3869H8.32346C8.48092 20.3869 8.59623 20.5277 8.58221 20.6767C8.52593 21.175 8.62157 21.6842 8.86625 22.1473C9.33874 23.0708 10.3175 23.6477 11.375 23.6477H15.3125V20.6875H11.42C11.2203 20.6875 11.1022 20.4654 11.2175 20.3083C11.2597 20.246 11.3075 20.1811 11.3581 20.1079C11.7266 19.6042 12.2525 18.8215 12.7756 17.9304C13.1328 17.3292 13.4787 16.6873 13.7572 16.0427C13.8135 15.9263 13.8584 15.8071 13.9034 15.6906C13.9794 15.4848 14.0581 15.2925 14.1144 15.1002C14.1707 14.9377 14.2156 14.7671 14.2606 14.6073C14.3928 14.0602 14.4491 13.4806 14.4491 12.8794C14.4491 12.6438 14.4378 12.3973 14.4153 12.1617C14.4041 11.9044 14.3703 11.6471 14.3365 11.3898C14.314 11.1623 14.2719 10.9375 14.2269 10.7019C14.1707 10.3579 14.0919 10.0167 14.0019 9.67268L13.9709 9.54272C13.9034 9.30706 13.8472 9.0823 13.7685 8.84669C13.5462 8.10727 13.2903 7.38688 13.0203 6.71252C12.9219 6.44437 12.8094 6.18709 12.6969 5.92981C12.531 5.54252 12.3622 5.19044 12.2075 4.85729C12.1288 4.70561 12.0613 4.56748 11.9938 4.42666C11.9178 4.26686 11.8391 4.10706 11.7603 3.95544C11.7041 3.83897 11.6394 3.73063 11.5944 3.62229L11.1134 2.76646C11.0459 2.64999 11.1584 2.51186 11.2906 2.54708L14.3 3.33248H14.3085C14.314 3.33248 14.3169 3.33522 14.3197 3.33522L14.7162 3.44082L15.1522 3.56002L15.3125 3.60331V1.88084C15.3125 1.04936 16.0044 0.375 16.8594 0.375C17.2869 0.375 17.675 0.542918 17.9535 0.816438C18.2319 1.09001 18.4062 1.46376 18.4062 1.88084V4.43752L18.7269 4.52415C18.7522 4.53232 18.7775 4.54313 18.8 4.55936C18.8788 4.61625 18.9912 4.70018 19.1347 4.80315C19.2472 4.88977 19.3681 4.99542 19.5144 5.10377C19.804 5.32852 20.15 5.61833 20.5297 5.95148C20.6309 6.03541 20.7294 6.12209 20.8194 6.20876C21.3088 6.64751 21.8572 7.16208 22.3803 7.73084C22.5266 7.89064 22.67 8.05312 22.8163 8.22373C22.9625 8.39708 23.1172 8.56769 23.2522 8.73835C23.4294 8.96584 23.6206 9.20146 23.7866 9.44793C23.8653 9.56439 23.9553 9.68354 24.0313 9.8C24.245 10.1114 24.4334 10.4338 24.6135 10.7561C24.6894 10.905 24.7681 11.0675 24.8356 11.2273C25.0353 11.6579 25.1928 12.0967 25.2941 12.5354C25.325 12.6302 25.3475 12.7331 25.3588 12.8252V12.8469C25.3925 12.9769 25.4038 13.115 25.415 13.2558C25.46 13.7054 25.4375 14.155 25.3363 14.6073C25.2941 14.7996 25.2378 14.981 25.1703 15.1734C25.1028 15.3575 25.0353 15.5498 24.9481 15.7312C24.7794 16.1077 24.5797 16.4842 24.3434 16.8362C24.2675 16.9663 24.1775 17.1044 24.0875 17.2344C23.989 17.3725 23.8878 17.5025 23.7978 17.6298C23.6741 17.7923 23.5419 17.9629 23.4069 18.1146C23.286 18.2744 23.1622 18.4342 23.0272 18.575C22.8388 18.789 22.6587 18.9921 22.4703 19.1871C22.3578 19.3144 22.2369 19.4444 22.1131 19.5609C21.9922 19.6908 21.8684 19.8073 21.7559 19.9156C21.5675 20.0971 21.41 20.2379 21.2778 20.3544L20.9685 20.6279C20.9235 20.6658 20.8644 20.6875 20.8025 20.6875H18.4062V23.6477H21.4212C22.0962 23.6477 22.7375 23.4175 23.255 22.995C23.4322 22.846 24.2056 22.2015 25.1197 21.2292C25.1506 21.1966 25.19 21.1723 25.235 21.1615L33.5628 18.8431C33.7175 18.7998 33.875 18.9135 33.875 19.0706Z" fill="#555565" />
                        </svg>
                    </Button>
                    <Button directContent disabled>
                        <svg width="35" height="34" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 34">
                            <path fill="#555565" d="M34.6 14v1H20.7l-1-1h14.9Zm0 1.7H21.4l.9.9h12.3v-1Zm0 5.8h-4.1l.5.5v.5h3.6v-1Zm-15.6 0h3.6v1h-3.5v-1Zm0 1.6h3.6v1h-3.5v-1Zm15.6 0H31v.7l-.3.3h3.9v-1Zm0 5.9v-1h-3.8l.2.3v.7h3.6Zm-3.6.7h3.6v1H31v-1Zm0 1.6v1h3.6v-1H31Zm0 1.7v.8h3.6V33H31Zm-8.4-22.3v1h-3.5v-1h3.5Zm0-1.6v1h-3.5V9h3.5Zm0-1.6v1h-3.5v-1h3.5Zm0-1.7v1h-3.5v-1h3.5ZM19 4.2h3.6v1h-3.5v-1Zm3.6-1.7v1h-3.5v-1h3.5Zm0-1.5v.9h-3.5v-1h3.5Zm.4 11.4 1 1h-5v-1h4ZM13 1H.8v.9H14l-1-1Zm1.6 1.5 1 1H.8v-1h13.8ZM4.2 4.2H.8v1h3.4v-1Zm0 1.6v1H.8v-1h3.4Zm7.9-1.6.5.5v.5h3.6v-1h-4Zm.5 2.2v-.6h3.6v1h-4l.4-.4ZM.8 7.5h15l-.9 1H1v-1Zm14.1 1.6 1 1H.9V9h14ZM4.2 10.7H.8v1h3.4v-1Zm8.4 1.7v.4l-.5.6h4.1v-1h-3.6Zm0-1.4v.7h3.6v-1h-3.8l.2.3Zm-8.4 1.4H.8v1h3.4v-1ZM15.5 14H.8v1h13.7l1-1Zm-1.6 1.7H.9v.9h12l1-1Zm-1.1 2.5v1h3.4v-1h-3.4Zm0 2.6v-1h3.4v1h-3.4Zm0 1.7v-1h3.4v1h-3.4Zm0 1.5v-.9h3.4v1h-3.4Zm0 1.7v-1h3.4v1h-3.4Zm0 1.7v-1h3.4v1h-3.4Zm0 1.6v-1h3.4v1h-3.4ZM.8 18.2h3.4v1H.8v-1Zm0 1.6h3.4v1H.8v-1Zm0 1.7h3.4v1H.8v-1Zm0 1.6h3.4v1H.8v-1Zm0 1.6h3.4v1H.8v-1Zm0 1.7h3.4v1H.8v-1ZM4.2 29v-1H.8v1h3.4ZM19 19.8h14l1 1H19v-1Zm0-.6h13.4l-1-1H19.1v1Zm3.6 14.6V33h-3.5v1h3.5Zm0-1.5v-1h-3.5v1h3.5Zm0-1.7v-1h-3.5v1h3.5Zm0-2.6v1h-3.5v-1h3.5ZM19 24.7h15.3l-1 1H19v-1Zm14.3 1.7H19.1v1h15.2l-1-1ZM5.6 30.6l-1-1H.8v1h4.8Zm5.7 0h5v-1h-4l-1 1Zm-10 .7h14.3l-1 1H2.3l-1-1ZM13 33.8l1-.9H3l.8 1h9.3Z" />
                        </svg>
                    </Button>
                </div>
            </div>
            <div className="footer">
                <div className="left">
                    <span>
                        &copy; Neura
                    </span>
                    <a href="#" onClick={() => setCurrentOverlay(PopupOverlay.Terms)}>
                        Term of use
                    </a>
                    <a href="#" onClick={() => setCurrentOverlay(PopupOverlay.Privacy)}>
                        Privacy policy
                    </a>
                </div>
                <a className="rc" target="_blank" href="https://redcollar.co" rel="noreferrer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <svg width="35" height="16" viewBox="0 0 35 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={clsx(!hover && 'disabled')} d="M17.4547 7.56588L32.9853 0.212891L34.9782 2.20576L22.9523 15.3312L17.4547 9.90234L12.0259 15.3312L0 2.20576L1.99287 0.212891L17.4547 7.56588Z" fill={CURRENT_ACCENT()} />
                    </svg>
                    by Red Collar
                </a>
            </div>
        </div>
    );
}
