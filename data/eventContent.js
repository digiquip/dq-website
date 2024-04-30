import Translate, {translate} from '@docusaurus/Translate';

// Define the number of key points required
const numKeyPoints = 3;
const keyPoints = [];
for (let i = 1; i <= numKeyPoints; i++) {

    var title = 'home.event.keypoints_title'+i
    var desc = 'home.event.keypoints_desc'+i

    keyPoints.push({
        title: translate({ message: title }),
        description: translate({message: desc})
    });
}

const eventDetail = {
    event: <Translate>home.event.type</Translate>,
    date : <Translate>home.event.date</Translate>,
    title: <Translate>home.event.title</Translate>,
    description: <Translate>home.event.description</Translate>,
    signup: <Translate>home.event.signup</Translate>,
    presentors: [
        {name: 'Tom Freddy Braathen', image: 'img/competence-images/tom_freddy.webp'},
        {name: 'Cathrine Westbye', image: 'team_imgs/CathrineWestbye.jpeg'},
        {name: 'Ibtisam Andersen', image: 'team_imgs/ibtisam.jpeg'},
    ],
    keypoints: keyPoints
};

export default eventDetail