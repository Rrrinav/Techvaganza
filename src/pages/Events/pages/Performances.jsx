import PageLayout from "../../../Components/PageLayout";
import { performingEvents } from "../../../constants/eventDetails-final";
import EventsPageLayout from "../components/EventPageLayout";

export default function Performances(){
    return(
        <PageLayout title={"Performances"} imgUrl={'/common/performance.jpeg'}>
          <EventsPageLayout events={performingEvents} /> 
        </PageLayout>
    )
}