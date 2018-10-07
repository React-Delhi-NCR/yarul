import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ links, className, ...props }) => {
	return (
				<header className="Header  f5" role="banner">
					<div className="d-flex flex-justify-between px-3 container-lg">


						<div className="HeaderMenu d-flex flex-justify-between flex-auto">
							<div className="d-flex">
								<ul className="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
									{
										links.map(
											(link, i) => {
												return 		(
													<li key={i}>
														<a className="js-selected-navigation-item HeaderNavlink px-2" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
															{link}
														</a>
													</li>
												)
											}
										)
									}
								</ul>
							</div>


						</div>
					</div>
				</header>

		// }
	);
};

Header.defaultProps = {
	type: '',
	className: ''
};

Header.propTypes = {
	type: PropTypes.string,
	className: PropTypes.string
};

export default Header;
