import SuggestionCard from "./_components/suggestion-card";

export default function Home() {

  return (
    <div className={`flex grow gap-2 flex-col md:flex-row`}>
      <section className={`md:w-1/2 flex flex-col md:gap-2 grow`}>
        <div className={`flex flex-col md:flex-row md:h-1/2 md:gap-2 grow`}>
          <SuggestionCard className={`md:w-1/2 flex grow`}
                          bg={`/assets/places/istanbul.jpg`}
           title={'Istanbul'} href={'#'}/>
          <SuggestionCard className={`md:w-1/2 flex grow`}
                          bg={`/assets/places/india.jpg`}
           title={'india'} href={'#'}/>
        </div>
        <div className={`flex flex-col md:flex-row md:h-1/2 md:gap-2 grow`}>
          <SuggestionCard className={`md:w-1/2 flex grow`}
                          bg={`/assets/places/sahara.jpeg`}

           title={'desert'} href={'#'}/>
          <SuggestionCard className={`md:w-1/2 flex grow`}
                          bg={`/assets/places/bali.jpg`}

           title={'bali'} href={'#'}/>
        </div>
      </section>
      <section className={`md:w-1/2 md:h-full h-1/2 grow flex justify-center`}>
        <p>section two</p>
      </section>
    </div>
  );
}



