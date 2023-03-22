import * as C from './styles';
import { Home, Search } from '../../svgs/index';
import ThemeContext from '../../context/ThemeContext';
import { useContext } from 'react';
import ThemeSwitcher from '../../context/ThemeSwitcher';

type Props = {
    setGenre: (e: string) => void;
    setIsSearch: (e: boolean) => void;
    setIsFull: (e: boolean) => void;
    isSearch: boolean;
    isSidebar: boolean;
    setIsSidebar: (e: boolean) => void;
}

export const Sidebar = ({setGenre, setIsSearch, setIsFull, isSearch, isSidebar, setIsSidebar }: Props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <C.Container isSidebar={isSidebar} theme={theme}>
            <div className="inicialSearch">
            <ThemeSwitcher />
                <div
                // eslint-disable-next-line
                    onClick={() => (setGenre(''), setIsSearch(false), setIsFull(false), setIsSidebar(false))}
                    className="iniSearDivs"
                >
                    <p><Home fill={theme === "light" ? "#000000" : "#ffffff"} /></p> Initial Page
                </div>

                <div
                // eslint-disable-next-line
                    onClick={() => (setIsSearch(!isSearch), setIsSidebar(false))}
                    className="iniSearDivs"
                >
                    <p><Search fill={theme === "light" ? "#000000" : "#ffffff"} /></p> Search
                </div>

            </div>

            <div className="genres">
                <h2>Genres</h2>
                <div
                // eslint-disable-next-line
                    onClick={() => (setGenre('Beats') ,setIsSidebar(false), 
                    setIsSearch(false))}
                >
                    Beats
                </div>
                <div
                // eslint-disable-next-line
                    onClick={() => (setGenre('Ambient') ,setIsSidebar(false), setIsSearch(false))}
                >
                    Ambient
                </div>
                <div
                // eslint-disable-next-line
                    onClick={() => (setGenre('Classic') ,setIsSidebar(false), setIsSearch(false))}
                >
                    Classic
                </div>
                <div
                // eslint-disable-next-line
                    onClick={() => (setGenre('Eletronic') ,setIsSidebar(false), setIsSearch(false))}
                >
                    Eletronic
                </div>
            </div>
        </C.Container>
    )
}