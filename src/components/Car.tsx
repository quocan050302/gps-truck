const Car = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="car"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 480 400"
      className="w-[50px] h-[50px]"
    >
      <path
        fill="#262626"
        d="M330 355l140-70-320-160-140 70z"
        opacity=".3"
      ></path>
      <path
        fill="#2D3134"
        d="m69.3 196.4 50.2-14-34.6-19.9-17.5 16.9zM261.7 296.2l50.2-14-34.7-19.9-17.5 16.9z"
      ></path>
      <path
        d="m69.3 196.4 50.2-14-34.6-19.9-17.5 16.9zM261.7 296.2l50.2-14-34.7-19.9-17.5 16.9z"
        opacity=".29"
      ></path>
      <path
        fill="#2D3134"
        d="M298.4 276.3c-6.7-3.4-12.8-3.8-17.3-1.7l-9.5 5.1c-4.8 2.2-7.9 7.1-7.9 14.3 0 13.9 11.3 30.9 25.2 37.8 6.9 3.4 13.1 3.8 17.7 1.6 0 0 9.4-5 10.4-5.6 4.1-2.4 6.6-7.1 6.6-13.6 0-14-11.3-30.9-25.2-37.9z"
      ></path>
      <path
        d="M306.9 333.3c1.8-.9 9.2-4.9 10.1-5.5 4.1-2.4 6.6-7.1 6.6-13.6 0-5.6-1.8-11.7-4.9-17.4l-9.5 5.1c3.1 5.7 4.9 11.8 4.9 17.4.1 6.8-2.7 11.7-7.2 14z"
        opacity=".29"
      ></path>
      <path
        fill="#2D3134"
        d="M314.2 319.3c0 13.9-11.3 19.6-25.2 12.6-13.9-7-25.2-23.9-25.2-37.8s11.3-19.6 25.2-12.6c13.9 6.9 25.2 23.9 25.2 37.8z"
      ></path>
      <path
        fill="#E5E5E5"
        d="M308.6 316.5c0 10.9-8.8 15.3-19.7 9.9-10.9-5.4-19.7-18.7-19.7-29.6 0-10.9 8.8-15.3 19.7-9.9 10.9 5.5 19.7 18.7 19.7 29.6z"
      ></path>
      <g fill="#2D3134">
        <path d="M301.9 325.3c3-1.7 4.8-5 4.8-9.7v-1.1l-11-1.7 6.2 12.5zM293.1 303.6l11.5 2.5c-2.4-5.7-6.7-11.3-11.9-14.9l.4 12.4zM284.8 299.5l.4-12c-5.2-1.5-9.5-.3-11.9 3l11.5 9zM271.2 296.7v1.1c0 4.7 1.8 9.8 4.8 14.5l6.3-6.2-11.1-9.4zM288.9 314.2l-6.8 5.5c2.1 1.9 4.4 3.5 6.8 4.7 2.4 1.2 4.7 1.9 6.8 2l-6.8-12.2z"></path>
      </g>
      <path
        d="M314.2 319.3c0 13.9-11.3 19.6-25.2 12.6s-25.2-23.9-25.2-37.8 11.3-19.6 25.2-12.6c13.9 6.9 25.2 23.9 25.2 37.8z"
        opacity=".11"
      ></path>
      <path
        fill="#2D3134"
        d="M106.2 179.6c-6.7-3.4-12.8-3.8-17.3-1.7l-9.5 5.1c-4.8 2.2-7.9 7.1-7.9 14.3 0 13.9 11.3 30.9 25.2 37.8 6.9 3.4 13.1 3.8 17.7 1.6 0 0 9.4-5 10.4-5.6 4.1-2.4 6.6-7.1 6.6-13.6.1-14-11.2-30.9-25.2-37.9z"
      ></path>
      <path
        d="M114.8 236.6c1.8-.9 9.2-4.9 10.1-5.5 4.1-2.4 6.6-7.1 6.6-13.6 0-5.6-1.8-11.7-4.9-17.4l-9.5 5.1c3.1 5.7 4.9 11.8 4.9 17.4 0 6.8-2.8 11.6-7.2 14z"
        opacity=".29"
      ></path>
      <path
        fill="#2D3134"
        d="M122 222.5c0 13.9-11.3 19.6-25.2 12.6-13.9-7-25.2-23.9-25.2-37.8 0-13.9 11.3-19.6 25.2-12.6 13.9 7 25.2 23.9 25.2 37.8z"
      ></path>
      <path
        fill="#E5E5E5"
        d="M116.5 219.8c0 10.9-8.8 15.3-19.7 9.9S77.1 211 77.1 200.1c0-10.9 8.8-15.3 19.7-9.9s19.7 18.7 19.7 29.6z"
      ></path>
      <g fill="#2D3134">
        <path d="M109.8 228.5c3-1.7 4.8-5 4.8-9.7v-1.1l-11-1.7 6.2 12.5zM100.9 206.8l11.5 2.5c-2.4-5.7-6.7-11.3-11.9-14.9l.4 12.4zM92.7 202.7l.4-12c-5.2-1.5-9.5-.3-11.9 3l11.5 9zM79.1 199.9v1.1c0 4.7 1.8 9.8 4.8 14.5l6.3-6.2-11.1-9.4zM96.8 217.5 90 223c2.1 1.9 4.4 3.5 6.8 4.7 2.4 1.2 4.7 1.9 6.8 2l-6.8-12.2z"></path>
      </g>
      <path
        d="M122 222.5c0 13.9-11.3 19.6-25.2 12.6s-25.2-23.9-25.2-37.8c0-13.9 11.3-19.6 25.2-12.6 13.9 7 25.2 23.9 25.2 37.8z"
        opacity=".11"
      ></path>
      <path
        fill="#F8EBCB"
        d="M441 221c-19.3-17.2-102.5-82.6-116.4-92.9-13.9-10.3-64.2-41.9-98-50.6-33.8-8.7-38-3.6-44.9-5.1-6.9-1.5-27.4-6.3-57.6 3-12.9 4-28.2 8.4-40.7 19.6-16.6 14.8-29.4 37.8-35.6 50.3l-1.3 4.2c-2.3 7.5-1.3 15.7 2.7 22.4 3.4 5.7 7.7 12.3 10.9 15.9 2.8 3.1 6.2 6.4 9.1 9.2v-.7c0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 1.9-.2 3.7-.6 5.4l138.9 69.4c-.1-1.1-.2-2.2-.2-3.2 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 1.7-.2 3.2-.5 4.7l11.1 5.5s20.8 5.4 34.1 4.2c13.3-1.2 40.7-10.2 62.7-21.1 22-10.9 40.6-30.1 41-40.1.2-3.8-3.6-33.3-22.9-50.5z"
      ></path>
      <path
        fill="#F8EBCB"
        d="M363.8 162.5s-1.2-8.4 0-10.6c1.2-2.1 3.3-5.4 6-3 2.7 2.4 5.7 9.3 3 15.7-2.7 6.4-9-2.1-9-2.1z"
      ></path>
      <path
        fill="#FFF"
        d="M58.8 129.7s64.4 44.5 138.4 84.3 112.9 62.4 112.9 62.4l-45.7-39.2-163.9-95.6-41.7-11.9z"
        opacity=".3"
      ></path>
      <path
        fill="#2D3134"
        d="m102.1 142.6 162.2 94.7s-15.7-69-71.1-96.8-91.1 2.1-91.1 2.1zM169.7 91.4c21.6-10.2 39.2-13.3 39.2-15.4 0-2.1-55.5-4.8-89.8 12.4s-32.6 32-19.6 30.4 30.4-3 35.9-5.7 15.9-13 34.3-21.7z"
      ></path>
      <path
        fill={color}
        d="M98.9 116.5c-1.3 0-4.4-.3-4.9-2.6-.8-3.4 3.8-12.9 27.1-24.5 25.5-12.7 61.4-13.7 71.8-13.7 5.3 0 9.3.2 12 .5-1.4.5-2.9 1-4.5 1.5-7.2 2.3-18.1 5.8-30.2 11.6-12.3 5.8-21.3 12.5-27.2 16.8-3.1 2.2-5.5 4-7.2 4.9-4.2 2.1-17.2 3.5-28.6 4.8-2.3.3-4.6.5-6.7.7h-1.6z"
      ></path>
      <path
        fill="#2D3134"
        d="M244.4 169.5c-2 5.5 30.1 59.7 40.1 62.4 9.9 2.7 39.8 1.8 69.3-14.5s35-28.9 33.5-33.5c-1.5-4.5-58.2-52.2-67.5-53.1s-73 32-75.4 38.7z"
      ></path>
      <path
        fill="#FFF"
        d="M323.1 287s4.2-5.6 15.5-6.9c11.3-1.2 25.1-.1 35.4 9.1 7.7 6.9 10.5 9.8 10.5 9.8s-21.8 7.1-32.6 5.6c-10.7-1.5-28.8-17.6-28.8-17.6z"
        opacity=".2"
      ></path>
      <path
        fill="#E5E5E5"
        d="M325.2 285.1s3.9-5.2 14.3-6.3 23.2-.1 32.7 8.4c7.1 6.3 9.7 9 9.7 9s-20.1 6.6-30.1 5.2-26.6-16.3-26.6-16.3z"
      ></path>
      <path
        fill="#FFF"
        d="M444.4 267.4s15.2-14.2 14.4-18.2c-.8-4.1-12.5-24.3-14-21.3s-4.7 7.8-3.5 11.9c1.2 4.1 3.4 24 3.1 27.6z"
        opacity=".2"
      ></path>
      <path
        fill="#E5E5E5"
        d="M444.3 264.6s14.3-14.2 13.6-18.2c-.8-4.1-12.5-24.3-14-21.3s-4.7 7.8-3.5 11.9c1.2 4 4.2 23.9 3.9 27.6z"
      ></path>
      <path
        fill="#2D3134"
        d="M353.7 324.5l-.5 4.4s44.7-5.7 72.8-23c28-17.3 34.8-30.8 34.8-30.8s-21.6 23.4-48 34.2c-27.7 11.2-59.1 15.2-59.1 15.2z"
      ></path>
      <path
        fill="#656565"
        d="M380.9 180.2c-5.1-4.9-14.8-13.5-27.1-23.4-20-16.2-31.7-23.7-34.5-23.9h-.1c-4.1 0-20.4 6.8-38.6 16.2-20.9 10.7-32.1 18.3-33.7 20.6.2 2.8 5.7 14.7 15.9 31.1 11.3 18.1 19.5 27.1 22.2 27.9 1.5.4 3.4.7 5.6.9 13.2-2 36-7.1 58.2-20.2 18.8-11.1 27.8-21.8 32.1-29.2zM115.8 138.8l-2.1 6.3 62.4 36.4 10-40.2-.3-.4c-13.2-5.8-26.2-8.7-38.9-8.7-13.3.1-23.9 3.4-31.1 6.6zM247.3 223.1l2.5-15.3c-1.1-2.3-2.2-4.6-3.5-7-9.4-17.8-26-41.7-52.3-55.8l-6.2 43.3 59.5 34.8z"
      ></path>
      <path
        d="M126.2 169.6c0 2.9-2.4 4.1-5.3 2.7-2.9-1.5-5.3-5-5.3-8s2.4-4.1 5.3-2.7c2.9 1.5 5.3 5 5.3 8z"
        opacity=".2"
      ></path>
      <path
        fill="#F8EBCB"
        d="M112.4 160.6l-2.3 2.6s16.7 10.9 18.2 8.7c1.6-2.1-15.9-11.3-15.9-11.3z"
      ></path>
      <path
        d="M197.4 210.1c0 2.9-2.4 4.1-5.3 2.7-2.9-1.5-5.3-5-5.3-8 0-2.9 2.4-4.1 5.3-2.7 2.9 1.5 5.3 5 5.3 8z"
        opacity=".2"
      ></path>
      <path
        fill="#F8EBCB"
        d="M183.6 201l-2.3 2.6s16.7 10.9 18.2 8.7c1.6-2.1-15.9-11.3-15.9-11.3z"
      ></path>
      <path
        d="M263.9 237.2c0 .1-1.8 7-3.3 15.4-1.4 7.6-2.2 32.8-2.4 37.3l-79.6-40.3c-.1-1.6-1.2-16.5-1.2-30.1 0-14.3 3.6-30.2 3.6-30.3l-.9-.2c0 .2-3.6 16.2-3.6 30.5 0 12.6.9 26.4 1.2 29.6l-39.6-20c-.9-1.2-10.5-14.3-19.9-34.2-9.7-20.5-7.4-46.5-7.3-46.8l-.9-.1c0 .3-2.4 26.5 7.4 47.3 9.9 20.8 20 34.3 20.1 34.4l.1.1L259 291.4v-.7c0-.3.9-29.6 2.4-37.9 1.5-8.3 3.3-15.3 3.3-15.3l-.8-.3z"
        opacity=".2"
      ></path>
      <path
        d="M359.1 286.2c0 3.6-2.9 7.9-6.5 9.7s-6.5.3-6.5-3.2c0-3.6 2.9-7.9 6.5-9.7s6.5-.4 6.5 3.2zM369.1 288.8c0 2.5-2 5.5-4.5 6.8-2.5 1.2-4.5.2-4.5-2.3s2-5.5 4.5-6.8c2.5-1.2 4.5-.2 4.5 2.3z"
        opacity=".3"
      ></path>
      <path
        fill="#FFF"
        d="M344.7 292.1c0 1.3-1.1 3-2.4 3.6-1.3.7-2.4.1-2.4-1.2s1.1-3 2.4-3.6c1.3-.7 2.4-.2 2.4 1.2z"
      ></path>
      <path
        fill="#FFF"
        d="M356.4 288.9c0 1.8-1.5 4-3.2 4.9-1.8.9-3.2.2-3.2-1.6s1.5-4 3.2-4.9c1.7-.9 3.2-.2 3.2 1.6zM367.4 290.6c0 1.3-1.1 3-2.4 3.6-1.3.7-2.4.1-2.4-1.2s1.1-3 2.4-3.6c1.3-.7 2.4-.1 2.4 1.2z"
        opacity=".4"
      ></path>
      <path
        fill="#FFF"
        d="M341.1 284c0 1.3-1.1 3-2.4 3.6-1.3.7-2.4.1-2.4-1.2s1.1-3 2.4-3.6c1.3-.7 2.4-.1 2.4 1.2zM448 231.4c0 1.3-1.1 3-2.4 3.6-1.3.7-2.4.1-2.4-1.2s1.1-3 2.4-3.6c1.3-.7 2.4-.2 2.4 1.2zM452.5 237.7c0 1.3-1.1 3-2.4 3.6-1.3.7-2.4.1-2.4-1.2s1.1-3 2.4-3.6c1.3-.7 2.4-.1 2.4 1.2z"
      ></path>
      <path
        d="M453.9 241.9c0 3.1-2.5 6.8-5.6 8.3s-5.6.3-5.6-2.8 2.5-6.8 5.6-8.3c3.1-1.5 5.6-.2 5.6 2.8z"
        opacity=".3"
      ></path>
      <path
        fill="#FFF"
        d="M450.6 245.2c0 1.6-1.3 3.5-2.8 4.3-1.6.8-2.8.1-2.8-1.4s1.3-3.5 2.8-4.3c1.5-.8 2.8-.2 2.8 1.4z"
        opacity=".4"
      ></path>
      <path
        d="M449.4 250.3c0-2.5-2-3.5-4.5-2.3-.8.4-1.5.9-2.1 1.6.4 2.7.8 5.5 1.1 7.9.3-.1.7-.2 1.1-.4 2.4-1.2 4.4-4.3 4.4-6.8zM325.2 285c4.9-.4 18.7-1.1 27.4 1s23.8 7.9 29.2 10.1c-.6-.6-3.4-3.4-9.6-8.9-9.5-8.5-22.3-9.5-32.7-8.4-9.5 1-13.6 5.4-14.3 6.2z"
        opacity=".3"
      ></path>
      <path
        fill="#F8EBCB"
        d="M241.7 212.9s7.5 3.6 10.9 8.1c3.3 4.5 3.3 6.9 3.3 6.9s-20.8 4.5-31.1-2.1c-10.9-7.1 16.9-12.9 16.9-12.9z"
      ></path>
      <path
        fill="#2D3134"
        d="M296.4 230.3l3.8-.3 35-17 1.9-3.5 21.3-9.9-.9-1.7-40.7 18.1 1.2 1.5 15.8-7-.9 1-34.2 16.4z"
      ></path>
      <path
        fill="#2D3134"
        d="M333.4 220.9h3.3l27.9-20.7 3.4-8 10.7-13.6-.7-1-20.1 22.9.8 1.2 5.4-4.8-1.5 2.7-28.3 19.6zM375.6 286.9l11.6 10.4s16.8-3.2 31.8-10.9 24-18.1 24-18.1l-1.2-15.2s-6.8 12.3-26.4 22c-17.4 8.7-39.8 11.8-39.8 11.8z"
      ></path>
      <path
        d="M422.2 308.9c21.9-11 40.6-29.6 41-39.6.1-1.7.2-4.5-2.2-12.4-.2-.7-1.1-.8-1.5-.2-7.7 11-20.8 25.3-41.2 35.1-21.2 10.2-47.2 18.9-67.2 17.9-4.7-.2-5.5 4.5-5.9 11.9-.2 4.8 3.8 8.8 8.6 8.3 17.2-1.7 44.8-9.2 68.4-21z"
        opacity=".29"
      ></path>
      <path
        d="M328.2 295.8c-7-7.9-47-49.9-57.4-66.3-13.6-21.3-35.8-73.4-76.7-92.9-41-19.5-87.4-11.2-101.4-10.2-8.5.5-21.7-2.6-30.9-5.2-6 9.1-10.7 17.9-13.8 24.2l-1.3 4.2c-2.3 7.5-1.3 15.7 2.7 22.4 3.4 5.7 7.7 12.3 10.9 15.9 2.8 3.1 6.2 6.4 9.1 9.2v-.7c0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 1.9-.2 3.7-.6 5.4l138.9 69.4c-.1-1.1-.2-2.2-.2-3.2 0-10.6 6.2-17.4 15.8-17.4 3.8 0 7.9 1.1 12.1 3.2 14.5 7.2 26.2 24.9 26.2 39.4 0 1.7-.2 3.2-.5 4.7l11.1 5.5s5.8 1.5 13.2 2.8c-1.8-14.7-5.5-29-11.3-35.6z"
        opacity=".11"
      ></path>
      <path
        fill="#CC291F"
        d="M49.4 148.5s6.3-16.1 9.8-21.1c3.5-5 7.4-9.5 7.4-9.5l-1.1-3s-7.4 2.6-8.7 4.8c-1.4 2.3-8.9 25.6-8.9 25.6l1.5 3.2z"
      ></path>
      <path
        d="M379 183.1c.7-1 1.3-2 1.8-2.9-5.1-4.9-14.8-13.5-27.1-23.4-20-16.2-31.7-23.7-34.5-23.9h-.1c-4.1 0-20.4 6.8-38.6 16.2-20.9 10.7-32.1 18.3-33.7 20.6.1.9.7 2.9 1.9 5.6 42.7-13.8 89.4-11.1 130.3 7.8z"
        opacity=".2"
      ></path>
      <path fill="#E5E5E5" d="M408.4 303.2v14.6l26.3-13.1v-14.5z"></path>
      <path
        d="M444.3 264.6s14.3-14.2 13.6-18.2c-.8-4.1-12.5-24.3-14-21.3s-4.7 7.8-3.5 11.9c1.2 4 4.2 23.9 3.9 27.6z"
        opacity=".2"
      ></path>
      <path
        fill="#2D3134"
        d="M245.8 173.9c-3.2-7.9-25.4-33.1-50-45.2-31-15.2-58-15.2-63.5-14.4l-.2-1.3c5.6-.8 33-.8 64.3 14.5 10.9 5.3 22.7 14 33.4 24.4 8.5 8.2 15.4 16.9 17.3 21.5l-1.3.5zM325.1 135l-.1-.1c-10-7.3-36.7-26.7-61.3-38.7-30.9-15.1-55-19.8-60.3-19.8V75c5.4 0 29.8 4.7 60.9 20 24.7 12.1 51.4 31.5 61.5 38.8l.1.1-.8 1.1z"
      ></path>
    </svg>
  );
};

export default Car;
