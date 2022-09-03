import React, {FC} from 'react';

interface Props {
    width: number;
    height: number;
}

const Logo: FC<Props> = ({width, height}) => {
    return (
        <svg width={`${width}`} height={`${height}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.22529 0.076533C6.66395 0.330178 4.64015 2.26266 3.37924 3.74898C3.21025 3.94817 3.06007 4.11115 3.04548 4.11115C2.99846 4.11115 1.9989 3.21504 1.69136 2.89715C1.38275 2.57822 1.23713 2.48906 1.02511 2.48944C0.609914 2.4901 0.271854 2.82661 0.315507 3.1958C0.352225 3.50667 0.591555 3.80925 1.61627 4.84053C1.87719 5.10315 2.09067 5.33078 2.09067 5.3464C2.09067 5.36202 1.99956 5.50147 1.88825 5.65629C1.35729 6.39455 0.849475 7.28175 0.571908 7.95601C0.410308 8.34851 0.155954 9.12869 0.0594033 9.52796C-0.0698704 10.0625 0.00990582 10.3821 0.317818 10.5637C0.542982 10.6965 0.751835 10.7087 0.979674 10.6023C1.19394 10.5024 1.3068 10.3579 1.37783 10.0926C1.63265 9.14075 2.27426 7.84062 3.0434 6.71755C3.20044 6.48824 3.33777 6.30045 3.34857 6.30026C3.35937 6.30007 3.59711 6.44667 3.87689 6.62606C4.93664 7.30549 5.87246 7.78264 6.9116 8.17338C7.17494 8.27242 7.40152 8.36328 7.41509 8.37534C7.4287 8.38737 7.46892 8.59498 7.50448 8.83662C7.69586 10.1368 7.98674 11.6901 8.29448 13.0552C8.518 14.0466 8.56664 14.2497 8.72692 14.86C9.16925 16.5444 9.57124 17.7859 10.131 19.1963C10.2341 19.4562 10.3893 19.8601 10.4761 20.0939C10.5627 20.3277 10.6818 20.6324 10.7408 20.771C10.7997 20.9096 10.9041 21.1717 10.9728 21.3536C11.1324 21.7764 11.4351 22.4853 11.5819 22.7803C11.8401 23.2994 12.2415 23.7797 12.5326 23.918C12.945 24.114 13.4389 23.9465 13.6354 23.5442C13.7365 23.3371 13.7338 23.2214 13.6173 22.7769C13.5047 22.3469 13.4035 21.757 13.3436 21.1804C13.2883 20.6489 13.2886 17.881 13.344 17.0391C13.5253 14.2842 13.7347 12.7227 14.2099 10.583C14.3221 10.0776 14.5394 9.25624 14.5695 9.22361C14.5801 9.21212 14.7279 9.18683 14.898 9.16743C15.7836 9.06637 17.6583 8.49495 18.9342 7.93715C19.2525 7.79798 19.4337 7.73399 19.441 7.75817C19.4472 7.7789 19.5222 8.05802 19.6076 8.37846C19.6931 8.6989 19.8121 9.11697 19.8722 9.30751C19.9894 9.67951 20.1713 10.3216 20.4651 11.4009C20.6623 12.1255 20.7273 12.2606 20.9446 12.3967C21.4386 12.7064 22.0892 12.4118 22.1546 11.8489C22.1683 11.7305 22.1149 11.4903 21.8872 10.646C21.7308 10.0657 21.5453 9.40671 21.4752 9.18154C21.1888 8.2626 20.864 7.03115 20.8857 6.94622C20.8912 6.9249 21.0739 6.77893 21.2919 6.62184C21.5098 6.46475 22.0022 6.06939 22.3861 5.74331C22.77 5.41723 23.2381 5.02202 23.4262 4.86512C23.8026 4.55123 23.9284 4.37569 23.9846 4.08573C24.0529 3.73335 23.8903 3.40879 23.5706 3.25964C23.4148 3.18692 23.3571 3.17668 23.1624 3.18717C22.8804 3.20238 22.7091 3.30026 22.5491 3.53763C22.4883 3.62788 22.3071 3.80802 22.1465 3.93793C21.9859 4.06784 21.6309 4.36545 21.3577 4.59929C20.6876 5.17281 20.4631 5.35512 20.427 5.35512C20.4103 5.35512 20.3101 5.14657 20.2044 4.8917C19.7934 3.9003 19.2652 2.88499 18.6351 1.87514C18.4946 1.64996 18.3457 1.39713 18.3042 1.3133C18.2186 1.14046 18.0329 0.995281 17.8309 0.943443C17.5723 0.877024 17.2882 0.98514 17.0917 1.22471C17.0227 1.30883 16.8643 1.48956 16.7396 1.6264C16.4516 1.94259 15.9358 2.59762 15.6386 3.02463C14.8671 4.13319 14.0457 5.7948 13.5176 7.31525C13.441 7.53593 13.3681 7.72249 13.3556 7.72983C13.3217 7.74986 11.2119 7.66165 10.775 7.62193C10.5661 7.60298 10.2169 7.55315 9.99898 7.51124C9.62533 7.4394 8.90228 7.26423 8.87607 7.23923C8.85186 7.21614 8.6265 5.21466 8.52916 4.15839C8.37426 2.47728 8.36145 2.27831 8.35184 1.40274C8.34154 0.463205 8.32747 0.401384 8.07582 0.190097C7.83187 -0.0146713 7.51944 -0.0563994 7.22529 0.076533ZM9.48479 8.94638C10.0976 9.0865 10.8346 9.15443 12.401 9.21521L12.9208 9.23537L12.9009 9.31866C12.89 9.36449 12.8391 9.56494 12.788 9.76413C12.6117 10.4503 12.3511 11.7508 12.2136 12.63C11.9855 14.0889 11.8392 15.5915 11.7645 17.2437C11.7449 17.6768 11.7185 18.2153 11.7058 18.4405L11.6827 18.8499L11.5395 18.5035C11.3433 18.0287 10.8148 16.4843 10.6126 15.7951C10.1078 14.0739 9.58121 11.7346 9.22436 9.62812C9.11246 8.96752 9.10569 8.88223 9.16522 8.88255C9.18794 8.88268 9.33171 8.9114 9.48479 8.94638ZM17.9744 3.78045C17.8339 3.47733 17.6842 3.16202 17.6415 3.07973C17.5988 2.99744 17.5558 2.93033 17.5458 2.93052C17.4702 2.93216 16.3492 4.78301 15.9845 5.50804C15.5997 6.27326 15.1006 7.44257 15.1006 7.57899C15.1006 7.63735 15.9565 7.4134 16.7186 7.15566C17.5919 6.86029 17.9692 6.71435 18.5433 6.45003C18.9767 6.25046 19.0284 6.21837 19.01 6.16039C18.9219 5.88281 18.6608 5.24573 18.465 4.83059C18.3356 4.55613 18.1148 4.08357 17.9744 3.78045ZM6.9116 3.05563C6.9116 3.81909 7.04619 5.51282 7.17794 6.40694C7.19554 6.52646 7.20258 6.63127 7.19353 6.63986C7.15536 6.67627 6.10724 6.18583 5.5908 5.88989C5.26397 5.70257 4.38762 5.15711 4.3227 5.10058C4.28667 5.06918 4.35975 4.97432 4.87126 4.38858C5.53024 3.63391 6.80432 2.33177 6.88374 2.33177C6.89906 2.33177 6.9116 2.6575 6.9116 3.05563Z"
                  fill="#F9F7F7"/>
        </svg>
    );
};

export default Logo;