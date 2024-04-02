import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const channelListData = [
  {
    url: "https://www.twitch.tv/maykbrito",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },

  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },

  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://i.pinimg.com/originals/93/f0/2a/93f02a38b4cd9a0d744104368ff3004f.png",
    alt: "Imagem de Cellbit",
  },
];

const socialListData = [
  {
    url: "https://www.twitch.tv/zeephroth",
    imageUrl: "/assets/twitch.svg",
    alt: "Twitch",
  },
  {
    url: "https://www.twitter.com/raphaelmarinh15",
    imageUrl: "/assets/twitter.svg",
    alt: "Twitter",
  },
  {
    url: "https://www.instagram.com/marinho_rapha",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram",
  },
  {
    url: "https://www.youtube.com/raphaellucas6043",
    imageUrl: "/assets/youtube.svg",
    alt: "Youtube",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que mais gosto de jogar"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que gosto de assistir"
          className="channel-list"
        >
          {channelListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas Redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}

export default App;
