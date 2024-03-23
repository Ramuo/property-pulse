import InfoBox from "./InfoBox";

const InfoBoxes = () => {
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <InfoBox
                    heading = 'Pour les locataires'
                    backgroundColor = 'bg-gray-100'
                    buttonInfo={{
                        text: ' Parcourir les propriétés',
                        link: '/properties',
                        backgroundColor: 'bg-black'
                    }}
                    textColor = 'text-gray-800'
                    children
                    >
                        Trouvez la propriété locative de vos rêves. Ajouterla propriétés à vos favoris et contacter 
                        le propriétaire. 
                    </InfoBox>
                    <InfoBox
                    heading = 'Pour les propriétaires'
                    backgroundColor = 'bg-blue-100'
                    buttonInfo={{
                        text: ' Ajouter une propriété',
                        link: '/properties/add',
                        backgroundColor: 'bg-blue-500'
                    }}
                    textColor = 'text-gray-800'
                    children
                    >
                       Lister vos propriétés et trouver des potentiels locataires. Louer en tant que
                        airbnb ou longue durée. 
                    </InfoBox>
                </div>
            </div>
        </section>
    )
}

export default InfoBoxes;




