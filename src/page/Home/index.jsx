
import React from "react";
import OurTimeSection from "../../components/OurTimeSection";

export default function Home() {
  return <OurTimeSection />;
  }
import React from 'react'
import Result_Card from '../../components/Cards/Result_Card'
import Vector from '../../assets/icons/Vector.png'
import Instructor from '../../assets/icons/instructor 1.png'
import Studen from '../../assets/icons/1-student.png'
import Homes from '../../components/Home'
export default function Home() {

    return (
        <div>
            {/* <Result_Card src={Vector} type="Spcial courses" number="200" />
            <Result_Card src={Studen} type="Spcial courses" number="200" />
            <Result_Card src={Instructor} type="Spcial courses" number="200" /> */}
            <Homes />
        </div>
    )
}
