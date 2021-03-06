import Link from 'next/link'

const HeroIntro = () => (
	<div className="masthead-inner-container presentation-header--container">
	  <div className="masthead-hero">
		<div className="masthead-inner-image-prev">
		  <img className="masthead-self-prev" src="/static/i/me2.jpg" />
		</div>
		<h1 className="supermast-banner">
		  Hi! I'm, Corbin.
		</h1>

		<h3 className="supermast-sub-banner">
		  A developer that focuses on node.js/ES6 and React based applications.
		</h3>


		<ul className="masthead-intro-list">
		  <li className="masthead-intro-list-el">
			<div>
				<a className="anchor-mast-social" id="github-nav" href="https://github.com/basedjux">
				  <i className="fa fa-github"></i>
				  GitHub
				</a>
			</div>
		</li>
		  <li className="masthead-intro-list-el">
			<div>
				<a className="anchor-mast-social" id="twitter-nav" href="https://twitter.com/basedjux">
				  <i className="fa fa-twitter"></i>
				  Twitter
				</a>
			</div>
		  </li>
		  <li className="masthead-intro-list-el">
			<div>
				<a className="anchor-mast-social" id="medium-nav" href="https://medium.com/@corbinmatschull">
				  <i className="fa fa-medium"></i>
				  Medium
				</a>
			</div>
		  </li>
		</ul>
	  </div>
	  <style jsx>{`
		  .anchor-mast-social i {
			  padding: 0 4px;
		  }
	  `}</style>
	</div>

)
export default HeroIntro
