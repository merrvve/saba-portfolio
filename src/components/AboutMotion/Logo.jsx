import { motion } from "framer-motion";

import { draw } from "./draw";
export const Logo = () => {
  

    return (
        <>
        
      <motion.svg
        width="131" height="31"
        viewBox="0 0 131 31"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount:0.2}}
      >
        <motion.path
            d="M5.379 25.122C3.839 25.122 2.629 24.858 1.749 24.33C0.869 23.824 0.429 23.098 0.429 22.152C0.429 21.184 0.715 20.293 1.287 19.479C1.859 18.643 2.596 17.928 3.498 17.334C4.422 16.718 5.379 16.245 6.369 15.915C7.381 15.563 8.316 15.387 9.174 15.387C9.614 15.387 9.834 15.453 9.834 15.585C9.834 15.783 9.603 15.882 9.141 15.882C8.327 15.882 7.436 16.08 6.468 16.476C5.522 16.872 4.675 17.422 3.927 18.126C3.333 18.654 2.882 19.193 2.574 19.743C2.288 20.271 2.145 20.766 2.145 21.228C2.145 21.91 2.464 22.482 3.102 22.944C3.74 23.384 4.697 23.604 5.973 23.604C6.721 23.604 7.48 23.549 8.25 23.439C9.02 23.307 9.713 23.164 10.329 23.01C10.967 22.856 11.451 22.735 11.781 22.647C12.595 22.383 13.409 22.064 14.223 21.69C15.059 21.316 15.807 20.898 16.467 20.436C17.127 19.952 17.611 19.468 17.919 18.984C18.095 18.72 18.216 18.467 18.282 18.225C18.37 17.983 18.414 17.752 18.414 17.532C18.414 16.916 18.139 16.399 17.589 15.981C17.039 15.541 16.335 15.145 15.477 14.793C14.619 14.441 13.706 14.111 12.738 13.803C11.77 13.473 10.857 13.132 9.999 12.78C9.141 12.428 8.437 12.032 7.887 11.592C7.337 11.13 7.062 10.58 7.062 9.942C7.062 9.216 7.326 8.567 7.854 7.995C8.404 7.401 9.097 6.884 9.933 6.444C10.791 5.982 11.704 5.608 12.672 5.322C13.64 5.014 14.564 4.783 15.444 4.629C16.324 4.475 17.05 4.398 17.622 4.398C20.042 4.398 21.252 5.003 21.252 6.213C21.252 6.697 21.054 7.258 20.658 7.896C20.482 8.226 20.229 8.545 19.899 8.853C19.569 9.139 19.316 9.282 19.14 9.282C19.008 9.282 18.942 9.205 18.942 9.051C18.942 8.985 19.063 8.853 19.305 8.655C19.547 8.435 19.789 8.171 20.031 7.863C20.273 7.555 20.394 7.247 20.394 6.939C20.394 6.477 20.13 6.125 19.602 5.883C19.096 5.641 18.425 5.52 17.589 5.52C17.193 5.52 16.621 5.586 15.873 5.718C15.125 5.828 14.311 6.015 13.431 6.279C12.551 6.543 11.704 6.895 10.89 7.335C9.372 8.171 8.613 8.886 8.613 9.48C8.613 9.92 9.042 10.338 9.9 10.734C10.538 11.02 11.275 11.317 12.111 11.625C12.947 11.933 13.794 12.263 14.652 12.615C15.51 12.967 16.302 13.363 17.028 13.803C17.776 14.243 18.37 14.738 18.81 15.288C19.272 15.816 19.503 16.421 19.503 17.103C19.503 18.027 18.997 18.973 17.985 19.941C17.193 20.689 16.269 21.382 15.213 22.02C14.179 22.658 13.079 23.208 11.913 23.67C10.769 24.132 9.636 24.484 8.514 24.726C7.392 24.99 6.347 25.122 5.379 25.122ZM24.6946 24.3867C23.6555 24.3867 22.7375 24.1797 21.9407 23.7656C21.1516 23.3516 20.5618 22.7461 20.1711 21.9492C19.7805 21.1523 19.675 20.1836 19.8547 19.043C19.9875 18.293 20.2336 17.6328 20.593 17.0625C20.9524 16.4922 21.4446 16 22.0696 15.5859C22.6946 15.1719 23.4602 14.832 24.3664 14.5664C25.2805 14.293 26.3469 14.082 27.5657 13.9336C28.5032 13.8242 29.3391 13.7148 30.0735 13.6055C30.8079 13.4961 31.4016 13.3281 31.8547 13.1016C32.3079 12.875 32.5735 12.5352 32.6516 12.082L32.7688 11.332C32.9875 10.0273 32.7649 8.98828 32.1008 8.21484C31.4368 7.43359 30.3782 7.04297 28.925 7.04297C27.6438 7.04297 26.4954 7.33203 25.4797 7.91016C24.4641 8.48047 23.7063 9.20312 23.2063 10.0781L21.9641 9.57422C22.4485 8.71484 23.0618 8 23.8039 7.42969C24.5539 6.85937 25.3743 6.43359 26.2649 6.15234C27.1633 5.87109 28.0774 5.73047 29.0071 5.73047C29.8118 5.73047 30.5618 5.84375 31.2571 6.07031C31.9524 6.29688 32.5461 6.64063 33.0383 7.10156C33.5383 7.5625 33.8938 8.15234 34.1047 8.87109C34.3235 9.58203 34.3469 10.4336 34.175 11.4258L32.0891 24H30.6594L31.2102 20.7539H31.1047C30.6829 21.4258 30.1516 22.0391 29.511 22.5937C28.8782 23.1406 28.1555 23.5781 27.343 23.9062C26.5305 24.2266 25.6477 24.3867 24.6946 24.3867ZM24.9641 23.0625C26.0891 23.0625 27.136 22.7891 28.1047 22.2422C29.0813 21.6875 29.9016 20.9297 30.5657 19.9687C31.2375 19.0078 31.6711 17.918 31.8664 16.6992L32.3235 14.0508C32.1125 14.207 31.8274 14.3477 31.468 14.4727C31.1086 14.5898 30.7063 14.6953 30.261 14.7891C29.8235 14.875 29.3664 14.9531 28.8899 15.0234C28.4211 15.0859 27.9641 15.1445 27.5188 15.1992C26.1829 15.3555 25.0774 15.5977 24.2024 15.9258C23.3274 16.2461 22.6516 16.668 22.175 17.1914C21.7063 17.7148 21.4055 18.3477 21.2727 19.0898C21.0774 20.3164 21.3274 21.2852 22.0227 21.9961C22.7258 22.707 23.7063 23.0625 24.9641 23.0625ZM37.5971 24L41.5815 -7.15256e-07L42.9995 -7.15256e-07L41.3589 10.0195H41.4995C41.8979 9.24609 42.4057 8.53516 43.0229 7.88672C43.6479 7.23828 44.3784 6.71875 45.2143 6.32812C46.0503 5.92969 46.98 5.73047 48.0034 5.73047C49.4487 5.73047 50.644 6.13281 51.5893 6.9375C52.5346 7.73437 53.187 8.83594 53.5464 10.2422C53.9136 11.6406 53.9448 13.2422 53.6401 15.0469C53.3432 16.8594 52.7807 18.4688 51.9526 19.875C51.1323 21.2734 50.1167 22.375 48.9057 23.1797C47.7026 23.9766 46.3745 24.375 44.9214 24.375C43.8901 24.375 43.0229 24.1797 42.3198 23.7891C41.6245 23.3984 41.0698 22.8789 40.6557 22.2305C40.2495 21.5742 39.9682 20.8555 39.812 20.0742H39.6479L38.9917 24H37.5971ZM40.5034 15.0352C40.2534 16.5664 40.2534 17.9375 40.5034 19.1484C40.7534 20.3516 41.2495 21.3047 41.9917 22.0078C42.7339 22.7031 43.7182 23.0508 44.9448 23.0508C46.1714 23.0508 47.2886 22.6992 48.2964 21.9961C49.3042 21.2852 50.1479 20.3242 50.8276 19.1133C51.5073 17.9023 51.9721 16.543 52.2221 15.0352C52.4643 13.5273 52.4604 12.1719 52.2104 10.9687C51.9604 9.76562 51.4643 8.81641 50.7221 8.12109C49.98 7.41797 48.9917 7.0664 47.7573 7.0664C46.5386 7.0664 45.4253 7.41406 44.4175 8.10937C43.4175 8.79687 42.5776 9.74219 41.8979 10.9453C41.2182 12.1406 40.7534 13.5039 40.5034 15.0352ZM60.8064 24.3867C59.7673 24.3867 58.8493 24.1797 58.0525 23.7656C57.2634 23.3516 56.6736 22.7461 56.2829 21.9492C55.8923 21.1523 55.7868 20.1836 55.9665 19.043C56.0993 18.293 56.3454 17.6328 56.7048 17.0625C57.0642 16.4922 57.5564 16 58.1814 15.5859C58.8064 15.1719 59.572 14.832 60.4782 14.5664C61.3923 14.293 62.4587 14.082 63.6775 13.9336C64.615 13.8242 65.4509 13.7148 66.1853 13.6055C66.9196 13.4961 67.5134 13.3281 67.9665 13.1016C68.4196 12.875 68.6853 12.5352 68.7634 12.082L68.8806 11.332C69.0993 10.0273 68.8767 8.98828 68.2126 8.21484C67.5486 7.43359 66.49 7.04297 65.0368 7.04297C63.7556 7.04297 62.6071 7.33203 61.5915 7.91016C60.5759 8.48047 59.8181 9.20312 59.3181 10.0781L58.0759 9.57422C58.5603 8.71484 59.1736 8 59.9157 7.42969C60.6657 6.85937 61.4861 6.43359 62.3767 6.15234C63.2751 5.87109 64.1892 5.73047 65.1189 5.73047C65.9236 5.73047 66.6736 5.84375 67.3689 6.07031C68.0642 6.29688 68.6579 6.64063 69.1501 7.10156C69.6501 7.5625 70.0056 8.15234 70.2165 8.87109C70.4353 9.58203 70.4587 10.4336 70.2868 11.4258L68.2009 24H66.7712L67.322 20.7539H67.2165C66.7946 21.4258 66.2634 22.0391 65.6228 22.5937C64.99 23.1406 64.2673 23.5781 63.4548 23.9062C62.6423 24.2266 61.7595 24.3867 60.8064 24.3867ZM61.0759 23.0625C62.2009 23.0625 63.2478 22.7891 64.2165 22.2422C65.1931 21.6875 66.0134 20.9297 66.6775 19.9687C67.3493 19.0078 67.7829 17.918 67.9782 16.6992L68.4353 14.0508C68.2243 14.207 67.9392 14.3477 67.5798 14.4727C67.2204 14.5898 66.8181 14.6953 66.3728 14.7891C65.9353 14.875 65.4782 14.9531 65.0017 15.0234C64.5329 15.0859 64.0759 15.1445 63.6306 15.1992C62.2946 15.3555 61.1892 15.5977 60.3142 15.9258C59.4392 16.2461 58.7634 16.668 58.2868 17.1914C57.8181 17.7148 57.5173 18.3477 57.3845 19.0898C57.1892 20.3164 57.4392 21.2852 58.1345 21.9961C58.8376 22.707 59.8181 23.0625 61.0759 23.0625ZM95.2775 9.87891L93.9064 10.207C93.7893 9.54297 93.5783 8.97656 93.2736 8.50781C92.9689 8.03125 92.5471 7.66797 92.008 7.41797C91.4768 7.16016 90.8088 7.03125 90.0041 7.03125C88.6525 7.03125 87.5002 7.36719 86.5471 8.03906C85.5939 8.71094 85.0314 9.57812 84.8596 10.6406C84.7189 11.4844 84.883 12.1797 85.3518 12.7266C85.8205 13.2734 86.6135 13.6914 87.7307 13.9805L90.4025 14.6719C91.7619 15.0234 92.7346 15.6016 93.3205 16.4062C93.9143 17.2109 94.1135 18.1953 93.9182 19.3594C93.7619 20.3516 93.3518 21.2266 92.6877 21.9844C92.0314 22.7344 91.1955 23.3203 90.1799 23.7422C89.1643 24.1641 88.0314 24.375 86.7814 24.375C85.0939 24.375 83.7736 23.9805 82.8205 23.1914C81.8674 22.3945 81.3557 21.2578 81.2854 19.7813L82.7033 19.5C82.758 20.6641 83.1408 21.5508 83.8518 22.1602C84.5627 22.7617 85.5744 23.0625 86.8869 23.0625C88.3791 23.0625 89.6408 22.707 90.6721 21.9961C91.7033 21.2852 92.3088 20.3789 92.4885 19.2773C92.6213 18.457 92.4689 17.7695 92.0314 17.2148C91.5939 16.6602 90.8596 16.2539 89.8283 15.9961L87.0979 15.293C85.676 14.9258 84.6564 14.3398 84.0393 13.5352C83.4299 12.7227 83.2229 11.7305 83.4182 10.5586C83.5822 9.60547 83.9729 8.76562 84.59 8.03906C85.215 7.3125 86.0041 6.74609 86.9572 6.33984C87.9104 5.93359 88.9611 5.73047 90.1096 5.73047C91.6486 5.73047 92.84 6.09375 93.6838 6.82031C94.5275 7.53906 95.0588 8.55859 95.2775 9.87891ZM86.3596 23.9062H87.6252L87.2854 24.8438C88.0119 24.9609 88.5588 25.2461 88.926 25.6992C89.2932 26.1602 89.4064 26.7852 89.2658 27.5742C89.1174 28.457 88.6838 29.1367 87.965 29.6133C87.2541 30.0977 86.2854 30.3516 85.0588 30.375L85.1994 29.2617C86.0354 29.2461 86.676 29.1055 87.1213 28.8398C87.5744 28.582 87.8479 28.1719 87.9416 27.6094C88.0354 26.9844 87.8947 26.5234 87.5197 26.2266C87.1525 25.9297 86.5314 25.7773 85.6564 25.7695L86.3596 23.9062ZM104.076 24.375C102.451 24.375 101.103 23.9727 100.033 23.168C98.9623 22.3633 98.2162 21.2617 97.7944 19.8633C97.3725 18.4648 97.31 16.8711 97.6069 15.082C97.9037 13.2852 98.4975 11.6836 99.3881 10.2773C100.279 8.87109 101.369 7.76172 102.658 6.94922C103.947 6.13672 105.337 5.73047 106.83 5.73047C107.837 5.73047 108.755 5.93359 109.583 6.33984C110.419 6.74609 111.122 7.32812 111.693 8.08594C112.263 8.83594 112.658 9.74609 112.876 10.8164C113.095 11.8867 113.095 13.0898 112.876 14.4258L112.712 15.3164L98.4623 15.3164L98.685 14.0156L111.494 14.0156C111.712 12.7187 111.65 11.5469 111.306 10.5C110.962 9.44531 110.392 8.60937 109.595 7.99219C108.806 7.375 107.837 7.0664 106.689 7.0664C105.517 7.0664 104.4 7.40625 103.337 8.08594C102.283 8.75781 101.376 9.65625 100.619 10.7812C99.8686 11.9062 99.3686 13.1445 99.1186 14.4961L98.978 15.2227C98.728 16.7695 98.7592 18.1328 99.0717 19.3125C99.392 20.4844 99.9858 21.4023 100.853 22.0664C101.72 22.7227 102.853 23.0508 104.251 23.0508C105.228 23.0508 106.095 22.8867 106.853 22.5586C107.619 22.2227 108.267 21.8164 108.798 21.3398C109.337 20.8633 109.759 20.4023 110.064 19.957L111.247 20.4844C110.888 21.0859 110.372 21.6875 109.701 22.2891C109.029 22.8828 108.22 23.3789 107.275 23.7773C106.33 24.1758 105.263 24.375 104.076 24.375ZM118.587 12.3281L116.653 24H115.223L118.223 6H119.618L119.149 8.84766H119.29C119.852 7.91797 120.649 7.17187 121.68 6.60938C122.712 6.04688 123.868 5.76563 125.149 5.76563C126.352 5.76563 127.372 6.02344 128.208 6.53906C129.044 7.05469 129.641 7.78906 130.001 8.74219C130.36 9.6875 130.43 10.8164 130.212 12.1289L128.231 24H126.801L128.77 12.1875C129.02 10.6562 128.778 9.42578 128.044 8.49609C127.317 7.55859 126.208 7.08984 124.716 7.08984C123.708 7.08984 122.77 7.30859 121.903 7.74609C121.044 8.18359 120.321 8.79687 119.735 9.58594C119.149 10.3672 118.766 11.2813 118.587 12.3281Z"
            
            stroke="black"
            fill="black"
            variants={draw}
                custom={0.5}
            />
      
      </motion.svg>
      
      </>
    );
  }

