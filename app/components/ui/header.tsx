import { menuItems } from "../../utils/menu-items";

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
	return (
		<>
			<nav className="flex justify-center">
				<ul className="flex gap-3">
					{menuItems.map((menuItem) => (
						<li key={menuItem.name}>
							<a className="hover:text-amber-500" href={menuItem.href}>
								{menuItem.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Header;
