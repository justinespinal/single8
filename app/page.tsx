"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FAQQuestion } from './ui/FAQQuestion';

export default function Page() {
  const [loading, setLoading] = useState(true)

  const cast = [
    {
      image: "/placeholder",
      actor: "Yu Uemura",
      character: "Hiroshi",
      description: "Born on November 2, 2002, in Kagoshima Prefecture. Won the Sponichi Grand Prix Newcomer Award at the 75th Mainichi Film Awards for his role in the film Forgiven Children (2020/directed by Eisuke Naito). His major appearances include Goodbye, Band Apartment (22/directed by Keiji Miyano), From a World Without Sky (22/directed by Kazuyoshi Ozawa), The Girl Inside Me (22/directed by Mayu Nakamura), the film Omi Shojin, Run! (22/directed by Ryuichi Mino), and the TV drama First Penguin! (Nippon TV).",
      id: 0
    },
    {
      image: "/placeholder",
      actor: "Akari Takaishi",
      character: "Natsumi",
      description: "Born December 19, 2002, from Miyazaki Prefecture. Her first starring role in the film 'Baby Warukyure' (directed by Yugo Sakamoto) in 2021 was a huge hit and became a hot topic. Her major film appearances include 'A Certain Janitor' (21/directed by Yugo Sakamoto), 'Goodbye, Band Apartment' (21/directed by Keiji Miyano), 'The Distant Future' (22/directed by Takayuki Ohashi), 'Happy Endings' (22/directed by Kohei Inoue and Akira Osaki), 'Reminiscence Journey' (22/directed by Kenji Tani), and 'The Detective of the End' (22/directed by Kotaro Igawa). Upcoming films include 'My Happy Marriage' (directed by Ayuko Tsukahara), which will be released on March 17, 2023, and 'Baby Warukyure 2 Baby' (directed by Yugo Sakamoto), which will be released on March 24.",
      id: 1
    },
    {
      image: "/placeholder",
      actor: "Fukuzawa Kiku",
      character: "Yoshio",
      description: "Born on February 22, 2004 in Aichi Prefecture. A member of Horipro's first male dance and vocal group, 'WATWING.' In parallel with his group activities, he has also appeared in the musical '17 Again' (21/directed by Junpei Yukimitsu) and the hugely popular stage production 'Jujutsu Kaisen' (22/directed by Kensaku Kobayashi) as Junpei Yoshino, making him a unique and distinctive performer on stage.",
      id: 2
    },
    {
      image: "/placeholder",
      actor: "Ryuta Kuwayama",
      character: "Sasaki",
      description: "Born January 27, 2004 in Tokyo. Member of Horipro's first male dance and vocal group 'WATWING'. He is also active as an actor, appearing in the main role of Yanagida in AbemaTV's 'Kyou, Suki ni Narimashita. ~Aoi Haru Hen~' and Nippon Television's 'ZIP! Morning Drama' 'Crescendo de Susume' in October.",
      id: 3
    },
    {
      image: "/placeholder",
      actor: "Takuji Kawakubo",
      character: "Professor Maruyama",
      description: "Born December 17, 1981 in Tokyo. Played the main character, Komon Kazuki, in 'Ultraman Nexus' (2004). Major appearances include the TV drama 'Yoshihiko the Brave Series' (TV Tokyo), the first installment 'Yoshihiko the Brave and the Demon King's Castle' (2011), the third installment 'Yoshihiko the Brave and the Seven Chosen Ones' (2016), the stage plays 'Piaf' (2018/directed by Kuriyama Tamiya) and 'Boys in the Band: Midnight Party' (2020/directed by Shirai Akira), among many others.",
      id: 4
    },
    {
      image: "/placeholder",
      actor: "Takayuki Kitaoka",
      character: "Curry Shop Owner",
      description: "Born October 5, 1971, in Tochigi Prefecture. He has appeared in many works directed by Konaka Kazuya, including the TV drama Ultraman Nexus' (2004), the film 'Nanase Futatabii' (2010), and 'VAMP' (2019). Other notable works include 'Kingdom' (2019/directed by Sato Shinsuke) and 'Nobutora' (2021/directed by Kaneko Shusuke and Miyashita Genpa). He has also worked on many overseas films, including American, Hong Kong, Chinese, Filipino, Taiwanese, and Spanish films.",
      id: 5
    },
    {
      image: "/placeholder",
      actor: "Yusuke Sato",
      character: "Camera shop clerk Terao",
      description: "Born June 11, 1996 in Hokkaido. A member of the mixed-gender dance and vocal group lol. This is his second appearance in a film directed by Konaka, following his previous film, 'The Country Beyond the Stars' (21). He has also starred in the drama 'Misfortune Has No Choice But to Kiss!' (MBS). In addition to his work as an artist, he is also active in many areas as an actor and model.",
      id: 6
    },
    {
      image: "/placeholder",
      actor: "Narimi Arimori",
      character: "Hiroshi's mother",
      description: "Born December 10, 1967, in Kanagawa Prefecture. In 1986, she made her debut in the commercial film 'The Country Beyond the Starry Sky,' directed by Kazuya Konaka. In the same year, she played the heroine in the film 'Cinema no Tenchi' (directed by Yoji Yamada), for which she won the Newcomer Award at the 29th Blue Ribbon Awards and the Newcomer Actor Award at the 10th Japan Academy Awards. Since then, she has appeared in many dramas, stage plays, and films, including 'Tokyo Love Story' (CX) and the stage play 'Horobiki.' Recent works include the stage play 'Keshou Ni Tai' (2019, 21/directed by Hitoshi Uyama), 'Hula Girls - Dance for Smile-' (general director Shunsaku Kawage, composition and direction by Shunichi Okamura), and the films 'Inu Mukoiri' (2019/directed by Kazutaka Katashima), 'The Country Beyond the Starry Sky' (21/directed by Kazuya Konaka), and 'Tenjo no Hana' (22/directed by Kazutaka Katashima). Upcoming performances include the stage play 'A Story of Yaeko' from January to April and again from November to December, as well as the two-person play 'Hanashi no Hanashi' in June.",
      id: 7
    }
  ]

  const [currentActor, setCurrentCharacter] = useState(cast[0])

  const changeActor = (characterId: number) => {
    console.log(characterId)
    setCurrentCharacter(cast[characterId])
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)

    return () => clearTimeout(timer);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };

  const theaters = [
    [
      {
        location: "Fresh Meadows",
        name: "AMC Fresh Meadows",
        number: "718-454-6767",
        link: "https://www.amctheatres.com/movie-theatres/new-york-city/amc-fresh-meadows-7?utm_medium=organic&utm_source=google&utm_campaign=local"
      },
      {
        location: "Long Island City",
        name: "Regal UA Kaufman Astoria",
        number: "844-462-7342",
        link: "https://www.regmovies.com/theatres/regal-ua-kaufman-astoria-rpx-1333?utm_source=google&utm_medium=organic&utm_campaign=gmb-listing"
      },
      {
        location: "Forest Hills",
        name: "Cinemart Cinemas",
        number: "718-261-2043",
        link: "https://www.cinemartcinemas.com/"
      },
      {
        location: "Bay Terrace",
        name: "AMC Bay Terrace 6",
        number: "718-454-6767",
        link: "https://www.amctheatres.com/movie-theatres/new-york-city/amc-bay-terrace-6?utm_medium=organic&utm_source=google&utm_campaign=local"
      }
    ],
    {
      locations: [
        "Fresh Meadows", "Long Island City", "Forest Hills", "Kew Gardens", "Bay Terrace", "Glendale"
      ],
      names: [
        "AMC Fresh Meadows 7", "Regal UA Kaufman Astoria", "Cinemart Cinemas", "Kew Gardens Cinema", "AMC Bay Terrace 6", "Regal Atlas Park"
      ],
      numbers:[
        "718-454-6767", "844-462-7342", "718-261-2043", "718-441-3002", "718-631-0382", "844-462-7342"
      ]
    },
    {
      locations: [
        "Fresh Meadows", "Long Island City", "Forest Hills", "Kew Gardens", "Bay Terrace", "Glendale"
      ],
      names: [
        "AMC Fresh Meadows 7", "Regal UA Kaufman Astoria", "Cinemart Cinemas", "Kew Gardens Cinema", "AMC Bay Terrace 6", "Regal Atlas Park"
      ],
      numbers:[
        "718-454-6767", "844-462-7342", "718-261-2043", "718-441-3002", "718-631-0382", "844-462-7342"
      ]
    },
    {
      locations: [
        "Fresh Meadows", "Long Island City", "Forest Hills", "Kew Gardens", "Bay Terrace", "Glendale"
      ],
      names: [
        "AMC Fresh Meadows 7", "Regal UA Kaufman Astoria", "Cinemart Cinemas", "Kew Gardens Cinema", "AMC Bay Terrace 6", "Regal Atlas Park"
      ],
      numbers:[
        "718-454-6767", "844-462-7342", "718-261-2043", "718-441-3002", "718-631-0382", "844-462-7342"
      ]
    },
    {
      locations: [
        "Fresh Meadows", "Long Island City", "Forest Hills", "Kew Gardens", "Bay Terrace", "Glendale"
      ],
      names: [
        "AMC Fresh Meadows 7", "Regal UA Kaufman Astoria", "Cinemart Cinemas", "Kew Gardens Cinema", "AMC Bay Terrace 6", "Regal Atlas Park"
      ],
      numbers:[
        "718-454-6767", "844-462-7342", "718-261-2043", "718-441-3002", "718-631-0382", "844-462-7342"
      ]
    },
  ]

  return (
    <div>
      {/* Nav bar */}
      <div className="bg-gradient-to-b from-[#ec5c2c] to-[#ff9414] min-w-full flex flex-row gap-10 justify-center sticky top-0 z-30 text-white font-bold">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("trailer")}>Trailer</button>
        <button onClick={() => scrollToSection("cast")}>Cast</button>
        <button onClick={() => scrollToSection("theater")}>Theater</button>
      </div>
    
      {/* Banner */}
      <div id="home" className="min-h-[100vh] bg-banner-bg bg-cover flex flex-col justify-center items-center">
      </div>

      {/* Trailer */}
      <div id="trailer" className='min-h-[100vh] bg-[#ff9414]'>
        <h1 className="text-white text-6xl font-bold text-center pt-4 delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0" data-taos-offset="300">Trailer</h1>
        <div className="flex flex-col justify-center items-center pt-6">
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/BQkOqbbSKGI?si=qmVFlXiaHv7GkI0J" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>        </div>
      </div>

      {/* Cast */}
      <div id="cast" className='relative min-h-screen bg-cast-bg bg-cover flex flex-col items-center gap-11'>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className='relative z-10'>
          <h1 className='text-[#ec5c2c] text-6xl font-bold text-center pt-4 pb-6'>Cast</h1>
          <div className="text-white flex flex-col">
            <div className='flex flex-row gap-10 justify-center'>
              {cast.map((actor) => (
                <button onClick={() => changeActor(actor.id)} key={actor.id}>
                  <Image
                    src={actor.image+".png"}
                    width={100}
                    height={100}
                    alt={actor.character}
                  />
                </button>
              ))}
            </div>
            <div className="p-20">
              <div className="flex justify-between font-bold text-4xl">
                <h1>Actor</h1>
                <h1>Character</h1>
              </div>
              <div className="flex justify-between text-2xl">
                <h1>{currentActor.actor}</h1>
                <h1>{currentActor.character}</h1>
              </div>
              <hr className='dashed'/>
              <span className='text-2xl'>
                {currentActor.description}
              </span>
            </div>
          </div>
       </div>
      </div>

      {/* Theater */}
      <div id="theater" className='min-h-screen bg-white flex flex-col gap-10'>
        <h1 className='text-[#ec5c2c] text-6xl font-bold text-center pt-4'>
          Theater
        </h1>
        <div className='flex justify-center items-center mt-5'>
          <div className='flex items-center w-[50vw] p-10 gap-5 border-2 shadow-lg rounded'>
            <h1 className='text-2xl text-[#ec5c2c] font-bold'>Find the closest theater near you to watch Single8!</h1>
            <Image
              src="/single8-theater.jpg"
              height={300}
              width={300}
              alt="single8-ticket"
            />
          </div>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center pb-10'>
          <FAQQuestion question="Manhattan" answer={theaters[0]}/>
          <FAQQuestion question="Brookyln" answer={theaters[0]}/>
          <FAQQuestion question="Queens" answer={theaters[0]}/>
          <FAQQuestion question="Bronx" answer={theaters[0]}/>
          <FAQQuestion question="Staten Island" answer={theaters[0]}/>
        </div>

      </div>

    </div>
  );
}
