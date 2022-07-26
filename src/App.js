import kayla from './kayla.webp';
import isle from './swan__isle.webp';
import kayla1 from './kayla1.webp';
import twitter from './twitter.webp';
import facebook from './facebook.webp';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="social">
				<span className="social__twitter icons">
					<img src={twitter} className="__img" alt="" />
				</span>
				<span className="social__facebook icons">
					<img src={facebook} className="__img" alt="" />
				</span>
			</div>
			<header className="header">
				<div className="header__container container">
					<a href="#" className="header__link link">
						K.Griffith
					</a>
					<nav className="header__nav navbar">
						<ul>
							<li className="navbar__list ">
								<a href="#" className="list__link link">
									Apperences
								</a>
							</li>
							<li className="navbar__list ">
								<a href="#" className="list__link link">
									Books
								</a>
							</li>
							<li className="navbar__list ">
								<a href="#" className="list__link link">
									News
								</a>
							</li>
							<li className="navbar__list ">
								<a href="#" className="list__link link">
									About
								</a>
							</li>
							<li className="navbar__list ">
								<a href="#" className="list__link link">
									Contact
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<main className="page">
				<section className="page__kayla kayla__page">
					<div className="page__kayla__container main__container">
						<div className="kayla__img">
							<img src={kayla} alt="kayla" className="_img" />
						</div>
						<div className="page__kayla-parag parag__kayla">
							<h1 className="kayla__title">
								Kayla Griffith
							</h1>
							<p className="kayla__subtitle">
								Award Winning Author
							</p>
						</div>
					</div>
				</section>
				<section className="page__swan">
					<div className="swan__container">
						<div className="swan__isle main__container">
							<div className="isle__parag">
								<div className="isle__text">
									<span className="ribbon-left">
										<p className="isle__title text__isle">
											New Release
										</p>
									</span>
									<h3 className="isle__subtitle text__isle">
										The Swan Isle<br />(2023)
									</h3>
									<p className="isle__subtitle2 text__isle">
										I'm a paragraph. Click here to add your<br /> own text and edit me. It’s easy. Just click <br /> “Edit Text” or double click me to add <br /> your own content and make changes to <br /> the font. I’m a great place for you to tell <br /> a story and let your users know a little <br /> more about you.
									</p>
									<h3 className="isle__order text__isle">
										Order Now
									</h3>
								</div>
								<div className="isle__button">
									<button className="button__first button__order">
										Amazon
									</button>
									<button className="button__second button__order">
										Google
									</button>
									<button className="button__third button__order">
										ibooks
									</button>
								</div>
							</div>
							<div className="swan__img">
								<img className="_img" src={isle} alt="" />
							</div>
						</div>
					</div>
				</section>
				<section className="page__price">
					<div className="price__container">
						<span className="ribbon-down"> </span>
						<h2 className="price__title">
							Praise & Reviews
						</h2>
						<div className="price__text text__price">
							<div className="text__all">
								<p className="text__title">“</p>
								<p className="text__subtitle">
									I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
								</p>
								<p className="text__about">
									‘Swan Isle’ is Griffith's <br /> best writing yet” The <br /> Times Book Review
								</p>
								<span className="text__line"></span>
							</div>
							<div className="text__all">
								<p className="text__title">“</p>
								<p className="text__subtitle">
									I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
								</p>
								<p className="text__about">
									‘Gripping storytelling’ <br />
									The Good Read Blog
								</p>
								<span className="text__line"></span>
							</div>
							<div className="text__all">
								<p className="text__title">“</p>
								<p className="text__subtitle">
									I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
								</p>
								<p className="text__about">
									Grifith’s voice tells the <br /> story of all women “The <br /> Seattle Post Review”
								</p>
								<span className="text__line"></span>
							</div>
						</div>
					</div>
				</section>
				<section className="page__upcoming">
					<div className="upcoming__container main__container">
						<h2 className="upcoming__title">
							See Upcoming Appearances
						</h2>
						<p className="upcoming__subtitle">
							I'm a paragraph. Click here to add your own <br /> text and edit me. It's easy.
						</p>
						<div className="upcoming__block main__container">
							<h2 className="block__title">
								January 18th 2023, The Breakfast Club, Virtual Book Reading <br /> of Swan Isle, 7PM - 8PM EST
							</h2>
							<button className="block__button">
								<a href="#" className="block__link __link">Join</a>
							</button>
						</div>
						<div className="upcoming__block main__container">
							<h2 className="block__title">
								January 18th 2023, The Breakfast Club, Virtual Book Reading <br /> of Swan Isle, 7PM - 8PM EST
							</h2>
							<button className="block__button">
								<a href="#" className="block__link __link">Join</a>
							</button>
						</div>
						<div className="upcoming__block main__container">
							<h2 className="block__title">
								January 18th 2023, The Breakfast Club, Virtual Book Reading <br /> of Swan Isle, 7PM - 8PM EST
							</h2>
							<button className="block__button __button">
								<a href="#" className="block__link __link">Join</a>
							</button>
						</div>
					</div>
				</section>
				<section className="page__about">
					<div className="about__container">
						<span className="about__ribbon-down"> </span>
						<div className="about__img">
							<img src={kayla1} className="_img" alt="" />
						</div>
						<h2 className="about__title">
							About Kayla Griffith
						</h2>
						<p className="about__text">
							I'm a paragraph. Click here to add your own text and <br /> edit me. It’s easy. Just click “Edit Text” or double click <br /> me to add your own content and make changes to the <br /> font. I’m a great place for you to tell a story and let <br /> your users know a little more about you.
						</p>
						<button className="about__button">
							<a className="about__link __link">Read more</a>
						</button>
					</div>
				</section>
			</main>
			<footer className="footer">
				<p className="footer__text">
					© 2023 by K.Griffith. Proudly created with <a href="#" className="footer__link __link">Wix.com</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
