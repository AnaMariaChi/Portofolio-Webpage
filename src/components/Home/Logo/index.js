import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoA from '../../../assets/images/A.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .to(
        outlineLogoRef.current,
        { duration: 2, drawSVG: '50% 50%', stroke: 'yellow', strokeWidth: 3 },
        '+=1'
      ) // animate the outline of the letter
      .to(outlineLogoRef.current, { duration: 2, drawSVG: '100%', delay: 1 }) // Finish animating the SVG path
    //   .to(outlineLogoRef.current, { duration: 1, fill: 'black' }, '+=0.5') // Change the fill color to red
    //   .to(outlineLogoRef.current, { duration: 1, fill: '#022c43' }, '+=0.5') // Change the fill color back to black
    // gsap.fromTo(
    //   solidLogoRef.current,
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     delay: 4,
    //     duration: 4,
    //   }
    // )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoA}
        alt="JavaScript,  Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale (2) "
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M51.66-140.23L66.21-140.23L66.21-140.23Q67.97-140.23 69.24-139.79L69.24-139.79L69.24-139.79Q70.51-139.36 71.53-138.28L71.53-138.28L71.53-138.28Q72.56-137.21 73.44-135.45L73.44-135.45L73.44-135.45Q74.32-133.69 75.29-131.15L75.29-131.15L120.12-11.43L120.12-11.43Q120.61-10.06 120.80-8.98L120.80-8.98L120.80-8.98Q121.00-7.91 121.00-6.84L121.00-6.84L121.00-6.84Q121.00-3.32 118.90-1.66L118.90-1.66L118.90-1.66Q116.80 0 114.45 0L114.45 0L59.08 0L59.08 0Q56.54 0 54.83-0.63L54.83-0.63L54.83-0.63Q53.13-1.27 51.95-2.15L51.95-2.15L51.95-2.15Q50.78-3.03 50.15-4.00L50.15-4.00L50.15-4.00Q49.51-4.98 49.32-5.76L49.32-5.76L48.24-9.18L20.80-9.18L20.12-6.25L20.12-6.25Q19.82-4.79 19.43-3.66L19.43-3.66L19.43-3.66Q19.04-2.54 18.46-1.71L18.46-1.71L18.46-1.71Q17.87-0.88 16.85-0.44L16.85-0.44L16.85-0.44Q15.82 0 14.16 0L14.16 0L4.10 0L4.10 0Q0.98 0 0.98-2.44L0.98-2.44L0.98-2.44Q0.98-3.32 1.32-4.54L1.32-4.54L1.32-4.54Q1.66-5.76 2.25-7.42L2.25-7.42L43.07-130.96L43.07-130.96Q44.53-135.55 46.39-137.79L46.39-137.79L46.39-137.79Q48.24-140.04 51.66-140.23L51.66-140.23ZM34.08-59.38L23.83-21.19L44.92-21.19L34.08-59.38ZM111.23-11.62L67.29-128.91L67.29-128.91Q66.50-130.96 65.38-131.49L65.38-131.49L65.38-131.49Q64.26-132.03 61.52-132.03L61.52-132.03L58.11-132.03L104.30-8.20L108.98-8.20L108.98-8.20Q110.74-8.20 111.38-8.94L111.38-8.94L111.38-8.94Q112.01-9.67 111.23-11.62L111.23-11.62Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
