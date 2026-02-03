import CourseGoal from './CourseGoal.tsx'
import { type CourseGoal as CGoal } from '../App.tsx';
import InfoBox from './InfoBox.tsx';
import { ReactNode } from 'react';

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {

    if (goals.length === 0) {
        return <InfoBox mode='hint'>You have no goals yet. Start adding some!</InfoBox>
    };

    let warningBox: ReactNode;

    if (goals.length === 4) {
        warningBox = (
            <InfoBox mode='warning' severity='low'>
                Warning. You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        );
    } else if (goals.length === 5) {
        warningBox = (
            <InfoBox mode='warning' severity='medium'>
                Warning. You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        );
    } else if (goals.length >= 6) {
        warningBox = (
            <InfoBox mode='warning' severity='high'>
                Warning. You're collecting a lot of goals. Don't put too much on your plate!
            </InfoBox>
        );
    }

    return (
        <>
        {warningBox}
        <ul>
        {goals.map((goal) => (
            <li key={goal.id}>
            <CourseGoal 
                title={goal.title}
                onDelete={onDeleteGoal}
                id={goal.id}
            >
                {goal.description}
            </CourseGoal>
            </li>
        ))}
      </ul>
      </>
    )
}