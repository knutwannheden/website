// @ts-nocheck
import React, { useRef, useState } from 'react'

import styled from '@emotion/styled'
import { sizes, colors } from '../../styles/variables'
import Testimonial, { TestimonialProps } from './Testimonial'
import { testimonials } from '../../contents'

const StyledTestimonials = styled.div`
  min-height: 60rem;
  margin: 8rem 0 10rem;

  @media (max-width: ${sizes.breakpoints.sm}) {
    text-align: center;
  }

  /* ------------------------------------------- */
  /* ----- Section Testimonials ----- */
  /* ------------------------------------------- */

  h3 {
    margin-bottom: 3rem;
    text-align: center;
  }

  .tweets {
    display: flex;
    transition: all 0.3s;

    &-container {
      overflow: hidden;
    }

    & > * {
      flex: 0 0 32%;

      &:not(:last-child) {
        margin-right: 1.333%;
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    padding: 5rem 0;
  }

  .dot {
    height: 1.5rem;
    width: 1.5rem;
    background: ${colors.offWhite4};
    border: none;
    border-radius: 50%;
    transition: all .5s;

    &:hover,
    &:focus {
        background: ${colors.lightGrey};
    }

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`

const Testimonials: React.SFC<{}> = () => {
  const [currentCycle, setCurrentCycle] = useState<number>(0);
  const tweetsRef = useRef<HTMLDivElement>(null)
  const cycles = Math.ceil(testimonials.length / 3)

  const switchTweets = (to: number) => {
    const tweets = tweetsRef.current
    const firstTweet = tweets?.firstChild
    const spacing = getComputedStyle(firstTweet)['margin-right']
    const transform = firstTweet.offsetWidth * 3 + parseFloat(spacing.substring(0, spacing.length - 2)) * 2.8

    if (null !== tweets) {
      if (to === 0) {
        tweets.style.transform = 'none'
      } else {
        tweets.style.transform = `translateX(-${transform * to}px)`
      }
    }
  }

  return (
    <StyledTestimonials>
      <section className="testimonials">
        <div className="row">
          <h3>
            Used by 200,000+ <strong>Developers & Businesses</strong>
          </h3>
          <div className="tweets-container">
            <div className="tweets" ref={tweetsRef}>
              {testimonials.map((t) => (
                <Testimonial key={t.name} {...t} />
              ))}
            </div>
          </div>
          <div className="dots">
            {[...Array(cycles)].map((d, i) => (
              <button
                className="dot"
                key={`${d}${i}`}
                onClick={() => {
                  setCurrentCycle(i)
                  switchTweets(i)
                }}
                style={currentCycle === i ? {background: colors.lightGrey} : {}}
              >
                &nbsp;
              </button>
            ))}
          </div>
        </div>
      </section>
    </StyledTestimonials>
  )
}

export default Testimonials
