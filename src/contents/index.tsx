import React from 'react'

import { FeatureCardProps } from '../components/FeatureCard'

import Collaboration from '../resources/collaboration-placeholder.png'
import KubernetesGraphics from '../resources/kubernetes-graphic.svg'
import IPad from '../resources/ipad.png'
import FullAutomationGraphics from '../components/features/FullAutomationGraphics'
import FullAutomationButtons from '../components/features/FullAutomationButtons'
import BenHalpern from '../resources/ben-halpern.jpg'
import HughDurkin from '../resources/hugh-durkin.jpg'
import Mrugesh from '../resources/mrugesh.jpg'
import DavidRessler from '../resources/david-ressler.jpg'
import JonathanListerParsons from '../resources/jayfresh.jpg'
import SvenPeters from '../resources/sven-peters.jpg'
import Marcel from '../resources/marcel.jpg'
import Brenden from '../resources/brenden-o-leary.jpg'
import MikeNikles from '../resources/mike-nikles.jpg'
import Alejandro from '../resources/alejandro.jpeg'
import Joonas from '../resources/joonas-lehtinen.png'
import { TestimonialProps } from '../components/index/Testimonial'

import { Link } from 'gatsby'

export const features: FeatureCardProps[] = [
  {
    id: 'automation',
    Graphic: FullAutomationGraphics,
    title: (
      <strong>
        Think CI/CD for
        <br />
        Dev Environments
      </strong>
    ),
    text: (
      <>
        <p>
          Application code, configuration and infrastructure should all be stored as machine-executable code in your git repositories and
          applied to dev environments automatically and continuously. This is why we invented prebuilds
        </p>
        <p>
          More about <Link to="/blog/continuous-dev-environment-in-devops/">Continuous Dev Environments.</Link>
        </p>
      </>
    ),
    Buttons: FullAutomationButtons
  },
  {
    id: 'teams-together',
    src: Collaboration,
    title: (
      <strong>
        Where Teams
        <br />
        Code Together
      </strong>
    ),
    text: (
      <ul className="text-list">
        <li>
          <div>
            <strong>Do code reviews within Gitpod</strong>
            <br />
            No need to switch contexts anymore.
          </div>
        </li>
        <li>
          <div>
            <strong>Mentor or be mentored</strong>
            <br />
            Work together in one workspace in real-time.
          </div>
        </li>
        <li>
          <div>
            <strong>Take snapshots</strong>
            <br />
            Share a reproducible workspace with your team.
          </div>
        </li>
      </ul>
    )
  },
  {
    src: IPad,
    alt: 'Gitpod on an iPad',
    title: <strong>Remote-first. Secure by Design.</strong>,
    text: (
      <>
        <p>
          You no longer need an over-powered laptop to code, Gitpod works just as smoothly on a Chromebook or iPad. All you need is a
          browser.
        </p>
        <p>Gitpod centralizes all source code and never stores it on insecure machines and networks.</p>
      </>
    )
  },
  {
    src: KubernetesGraphics,
    alt: 'Kubernetes',
    title: <strong>Cloud Native Development Done Right</strong>,
    text: (
      <>
        <p>Gitpod is a multi-service Kubernetes application that we develop in Gitpod.</p>
        <p>
          Code, build, debug and run K8s applications entirely in the cloud. Get fully-baked workspaces for every branch and pull/merge
          request, pre-configured and pre-connected to their own dedicated K8s deployment.
        </p>
      </>
    )
  }
]

export const testimonials: TestimonialProps[] = [
  {
    name: 'Ben Halpern',
    avatar: BenHalpern,
    role: (
      <>
        Creator and Co-founder of{' '}
        <a href="https://twitter.com/forem" target="_blank">
          @forem
        </a>
      </>
    ),
    text: (
      <>
        <p>GitPod is incredibly cool.</p>
        <p>In my opinion, this is a big step in open source software contribution. I'm excited to see where we go from here.</p>
      </>
    ),
    twitterHandle: 'bendhalpern',
    tweetId: '1115274432958930946'
  },
  {
    name: 'Hugh Durkin',
    avatar: HughDurkin,
    role: (
      <>
        Platform Ecosystem at 
        <a href="https://twitter.com/HubSpot" target="_blank">
          @HubSpot
        </a>
      </>
    ),
    text: (
      <>
        <p>I've been playing around with the "next generation" of Cloud IDEs lately, and <a href="https://twitter.com/gitpodio" target="_blank">@gitpodio</a> is quickly emerging as one of the best 👨‍💻
        <br/>
        Awesome <a href="https://twitter.com/github" target="_blank">@github</a> integration, slick Chrome extension, and super fast 🚀
        https://gitpod.io/index.html
        </p>
      </>
    ),
    twitterHandle: 'hughdurkin',
    tweetId: '1102215129696010240'
  },
  {
    name: 'Mrugesh Mohapatra',
    avatar: Mrugesh,
    role: (
      <>
        Technology & Community,{' '}
        <a href="https://twitter.com/freeCodeCamp" target="_blank">
          @freeCodeCamp
        </a>
      </>
    ),
    text: (
      <>
        <p>
            Ya'all <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> is freaking amazing! We integrated it into our workflow for working on <a href="https://twitter.com/freeCodeCamp" target="_blank">@freeCodeCamp</a> 's codebase and I am honestly loving it. 🔥🔥!
        <br/>   
            Go check it out on our repo https://github.com/freeCodeCamp/f... now!
        </p>
      </>
    ),
    twitterHandle: 'raisedadead',
    tweetId: '1167463499779338243'
  },
  {
    name: 'David Ressler',
    avatar: DavidRessler,
    role: (
      <>
       Engineering Manager {' '}
        <a href="https://twitter.com/instagram" target="_blank">
          @instagram
        </a>
      </>
    ),
    text: (
      <>
        <p>I think I’m in love with <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>. It’s such a powerful tool. I’ve learned so much in the past week just from stumbling across Github repos that interest me and appending “<a href="http://gitpod.io/#" target="_blank">http://gitpod.io/#</a>” to the URL. A+ tool all around.</p>
      </>
    ),
    twitterHandle: 'DavidRessler',
    tweetId: '1191710936605831169'
  },
  {
    name: 'Jonathan Lister Parsons',
    avatar: JonathanListerParsons,
    role: (
      <>
        CTO @ PensionBee
      </>
    ),
    text: (
      <>
        <p>I'm really enjoying <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> - for me, it's made full-stack development in the browser (yes, including mobile) a reality</p>
      </>
    ),
    twitterHandle: 'jayfresh',
    tweetId: '1217728632887611397'
  },
  {
    name: 'Sven Peters',
    avatar: SvenPeters,
    role: (
      <>
        Dev Advocate at{' '}
        <a href="https://twitter.com/MongoDB" target="_blank">
          @MongoDB
        </a>
      </>
    ),
    text: (
      <>
        <p>Huge time saver, less frustrations for devs: Automated ready-to-code dev environments with pre-build workspaces. #gitpod #cloudide
        </p>
      </>
    ),
    twitterHandle: 'svenpet',
    tweetId: '1159698330764611584'
  },
  {
    name: 'Marcel van Remmerden',
    avatar: Marcel,
    role: (
      <>
       Product Design Manager{' '}
        <a href="https://twitter.com/GitLab" target="_blank">
          @GitLab
        </a>
      </>
    ),
    text: (
      <>
        <p>
            Can only agree, opening a GitLab repository in gitpod is a magical experience, thanks for the integration <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>!
        </p>
      </>
    ),
    twitterHandle: 'MvRemmerden',
    tweetId: '1215707492740739072'
  },
  {
    name: 'Brendan O’Leary',
    avatar: Brenden,
    role: (
      <>
        Dev. Evangelist{' '}
        <a href="https://twitter.com/GitLab" target="_blank">
          @GitLab
        </a>
      </>
    ),
    text: (
      <>
        <p>
            I just discovered the <a href="https://twitter.com/gitlab" target="_blank">@gitlab</a> and <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> integration is alive on <a href="http://GitLab.com" target="_blank">http://GitLab.com</a> (released in 13.4 behind a feature flag).  And it's AMAZING <a href="https://docs.gitlab.com/ee/integration/gitpod.html" target="_blank">https://docs.gitlab.com/ee/integration....</a>.
        </p>
        <p>Now I can code from *anywhere*</p>
      </>
    ),
    twitterHandle: 'olearycrew',
    tweetId: '1310376245629198341'
  },
  {
    name: 'Mike Nikles',
    avatar: MikeNikles,
    role: (
      <>
        Software Architact {' '}
        <a href="https://twitter.com/Google" target="_blank">
          @Google
        </a>
      </>
    ),
    text: (
      <>
        <p>12 lines of configuration gives me a 1-click development setup, installs dependencies and starts the dev servers for 3 APIs and 1 frontend application. It also ensures the Svelte extension is installed for all team members.
        </p>
        <p>
            How? With <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>!
        </p>
      </>
    ),
    twitterHandle: 'mikenikles',
    tweetId: '1298711944141000710'
  },
  {
    name: 'Alejandro',
    avatar: Alejandro,
    role: (
      <>
        Senior dev teaching code thru{' '}
        <a href="https://twitter.com/4GeeksAcademy" target="_blank">
          @4GeeksAcademy
        </a>
      </>
    ),
    text: (
      <>
        <p>My setup is on <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a>, just like Christopher McCandless, where I go my code goes with me, no setup whatsoever Smiling face with sunglasses 😎 #IntoTheWild</p>
      </>
    ),
    twitterHandle: 'alesanchezr',
    tweetId: '1247219573767667715'
  },
  {
    name: 'Joonas Lehtinen',
    avatar: Joonas,
    role: (
      <>
        Co-founder of Vaadin
      </>
    ),
    text: (
      <>
        <p>
            Wow - <a href="https://twitter.com/gitpod" target="_blank">@gitpod</a> is a brilliant way of evaluating a framework without installing anything.
        </p>
        <p> 
            Launch gitpod for <a href="https://twitter.com/vaadin" target="_blank">@vaadin</a> at <a href="https://vaadin.com/start/v14" target="_blank">https://vaadin.com/start/v14</a> ("Online workspace" tab). You'll have app running and will be editing code in 3min from clicking "Launch" button.
        </p>
      </>
    ),
    twitterHandle: 'joonaslehtinen',
    tweetId: '1238597160121200640'
  },
]
