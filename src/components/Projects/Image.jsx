const Image = ({ image1, image2, layout }) => {
    if (layout === "column") {
        return (
            <div className="flex lg:pl-[40px] lg:h-[340px] lg:w-[360px] md:w-[300px] flex-col gap-4 max-sm:gap-0 max-md:items-center max-md:mb-[20px]">
                <div className="w-[300px] h-[320px] lg:w-[320px] lg:h-[340px] md:w-[240px] md:h-[300px] max-md:w-[380px] max-md:h-[250px] max-sm:w-[230px] max-sm:h-[200px] flex justify-center items-center">
                    <img
                        className="w-full h-full object-contain rounded-xl max-sm:flex max-sm:justify-center max-sm:items-center"
                        src={image1}
                        alt="An image of a kano survey questionnaire, in which a participant is asked ‘How important is Need X?’, followed by ‘How satisfied are you with how Need X is being met?"
                    />
                </div>
            </div>
        );
    }

    if (layout === "phone") {
        return (
            <div className="relative lg:w-[360px] md:w-[300px] md:h-[300px] h-[320px] max-sm:h-[220px] w-full flex lg:justify-start md:justify-start justify-center items-center">
                <div className="relative w-[220px] h-[220px] lg:h-[280px] lg:w-[250px] lg:mt-28 mt-16">
                    <img
                        className="w-full h-full lg:h-[280px] lg:w-[255px] md:w-[230px] md:h-[240px] object-cover max-sm:w-[160px] max-sm:h-[160px]"
                        src={image1}
                        alt="A close-up image of a person next to their bike, holding a smartphone which displays the parry app, openon the map view. This image is overlayed with a second image, displaying a direct view of the parry app, open on the 'my spots' page. This page shows a segmented control, with 'Reported spots' selected, and another option to view 'Voted Spots'. The list of reported spots is currently ranked by most recent, with a dropdown menue offering other ranking options. This page also displays an app navigation bar at the bottom of the page, and a token balance at the top of the page next to the user's profile image."
                    />
                </div>
                <div className="absolute lg:top-[5%] lg:left-[39%] left-[60%] top-[0%] md:h-[360px] md:top-[-10%] w-[200px] lg:h-[250px] lg:w-[300px] h-[300px] max-sm:w-[100px] max-sm:h-[270px] md:left-[50%] max-sm:left-[50%] max-sm:top-[-24%]  max-md:top-[-1%] max-md:left-[55%]">
                    <img
                        className="w-full h-full lg:h-[320px] lg:w-[285px] md:w-[130px] md:h-[360px] object-contain"
                        src={image2}
                        alt="A close-up image of a person next to their bike, holding a smartphone which displays the parry app, openon the map view. This image is overlayed with a second image, displaying a direct view of the parry app, open on the 'my spots' page. This page shows a segmented control, with 'Reported spots' selected, and another option to view 'Voted Spots'. The list of reported spots is currently ranked by most recent, with a dropdown menue offering other ranking options. This page also displays an app navigation bar at the bottom of the page, and a token balance at the top of the page next to the user's profile image."
                    />
                </div>
            </div>
        );
    }

    if (layout === "columnTwo") {
        return (
            <div className="flex flex-col lg:pl-[40px] max-md:h-[250px] lg:w-[360px] max-sm:h-[200px] md:w-[300px] max-md:flex-row max-md:gap-2 max-md:justify-center max-sm:h] max-md:items-center">
                <div className="w-[220px] h-[160px] lg:w-[260px] lg:h-[185px] md:w-[250px] mb-2 max-sm:w-[180px] max-sm:h-[140px] max-sm:px-4 max-sm:object-contain shadow-lg">
                    <img
                        className="w-full h-full object-cover md:object-contain max-sm:object-contain"
                        src={image1}
                        alt="Two screenshots of the Javelin app. The left screen show a user landing page, from where they can select content based on their current motivation, rather than from an algorithm. The right screen shows a curated playlist screen with the first video (BLACK HOLES) ready to play. The page also shows the curator, with a descriptive text for the video, and a list of other video thumbnails for the rest of the curated playlist."
                    />
                </div>
                <div className="w-[220px] h-[150px] lg:w-[260px] lg:h-[160px] md:w-[250px] mb-6 lg:ml-[40px] max-sm:ml-0 max-sm:w-[160px] max-sm:h-[100px] shadow-lg">
                    <img
                        className="w-full h-full object-contain max-sm:object-contain"
                        src={image2}
                        alt="Two screenshots of the Javelin app. The left screen show a user landing page, from where they can select content based on their current motivation, rather than from an algorithm. The right screen shows a curated playlist screen with the first video (BLACK HOLES) ready to play. The page also shows the curator, with a descriptive text for the video, and a list of other video thumbnails for the rest of the curated playlist."
                    />
                </div>
            </div>
        );
    }

    if (layout === "One") {
        return (
            <div className="flex flex-col gap-4 lg:w-[360px] md:w-[300px] lg:pl-[80px] md:pr-[40px] max-md:flex max-md:justify-center max-md:items-center">
                <div className="lg:w-[340px] lg:h-[395px] md:w-[200px] md:h-[330px] max-md:w-[22\40px] max-md:h-[280px] max-sm:w-[195px] max-sm:h-[230px] md:w-[360px] md:h-[350px]">
                    <img
                        className="w-full h-full md:ml-[-30px] lg:ml-[-40px] object-cover md:object-contain rounded-xl"
                        src={image1}
                        alt="A close-up of a hand holding a smartphone. The screen displays a an N26  customer support chat, in which the user has chosen to speak with a human support specialist.The chat provides a written statement that the user is 'Chatting with a N26 specialist', and is shown an support icon depicting a person, as apposed to a 'bot' support agent in the previous replies."
                    />
                </div>
            </div>
        );
    }


    return (
        <div className="flex gap-4 lg:h-[300px] lg:w-[360px] md:w-[300px] max-md:flex max-md:mb-[20px] max-md:justify-center max-md:items-center max-md:gap-8 lg:mb-8 md:mb-4 max-sm:mb-6">
            <div className="lg:w-1/2 md:w-[130px]">
                <img
                    className="lg:h-[350px] max-md:h-[300px] md:h-[290px] max-sm:h-[250px] rounded-xl"
                    src={image1}
                    alt="An image showing two side-by-side screenshots of the tado app. The left image shows the 'Balance' feature, currently focused on how water, as apposed to room heating, which the user can navigate to via a segmented control at the top of the page. A graph shoes the daily balance interventions alongside the temperature set point and cost of heating value, and the photovoltaic activity (PV). The second screen shows an orange screen with white text — the room heating screen, with the set point temperature and a large slider element for manual adjustments. Below the slider the user has the option to return 'to the schedule' via a button, and information about when their manually set set point will return to the schedule. "
                />
            </div>
            <div className="lg:w-1/2 md:w-[130px] drop-shadow-lg">
                <img
                    className="lg:h-[350px] max-md:h-[300px] md:h-[290px] max-sm:h-[250px]  rounded-xl"
                    src={image2}
                    alt="An image showing two side-by-side screenshots of the tado app. The left image shows the 'Balance' feature, currently focused on how water, as apposed to room heating, which the user can navigate to via a segmented control at the top of the page. A graph shoes the daily balance interventions alongside the temperature set point and cost of heating value, and the photovoltaic activity (PV). The second screen shows an orange screen with white text — the room heating screen, with the set point temperature and a large slider element for manual adjustments. Below the slider the user has the option to return 'to the schedule' via a button, and information about when their manually set set point will return to the schedule. "
                />
            </div>
        </div>
    );
};

export default Image;