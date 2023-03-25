import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { ChatIcon } from './ChatIcon';
import { HomeIcon } from './HomeIcon';
import { ProfileIcon } from './ProfileIcon';
import classes from './RoadmapHoningSkills.module.css';
import { SearchIcon } from './SearchIcon';
import { UploadIcon } from './UploadIcon';

interface Props {
  className?: string;
}
/* @figmaId 11:3 */
export const RoadmapHoningSkills: FC<Props> = memo(function RoadmapHoningSkills(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes._3rdStage}>3rd - Stage</div>
      <div className={classes.listOfStepsToTake}>List of Steps to take:</div>
      <div className={classes.externalResources}>External Resources:</div>
      <div className={classes.yourPriorities}>Your Priorities</div>
      <div className={classes.yourPriorities2}>Your Priorities</div>
      <div className={classes.tabBar}>
        <div className={classes.background}>
          <div className={classes.background2}></div>
          <div className={classes.home}>
            <HomeIcon className={classes.icon} />
          </div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon2} />
          </div>
          <div className={classes.chat}>
            <ChatIcon className={classes.icon3} />
          </div>
          <div className={classes.profile}>
            <ProfileIcon className={classes.icon4} />
          </div>
          <div className={classes.upload}>
            <UploadIcon className={classes.icon5} />
          </div>
        </div>
        <div className={classes.shape}></div>
      </div>
      <div className={classes.generalInterviewPracticeBuildi}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock}>General Interview Practice</div>
          </li>
          <li>
            <div className={classes.textBlock2}>Building your Network/ Following Up</div>
          </li>
          <li>
            <div className={classes.textBlock3}>Pinpoint Interests</div>
          </li>
          <li>
            <div className={classes.textBlock4}>List Experience</div>
          </li>
        </ul>
      </div>
      <div className={classes.technicalInterviewPrepHttpsWww}>
        <ul className={classes.list2}>
          <li>
            <div className={classes.textBlock5}>
              Technical Interview prep: https://www.amazon.jobs/en/landing_pages/software-development-topics
            </div>
          </li>
          <li>
            <div className={classes.textBlock6}>
              Questions to prepare for
              https://www.indeed.com/career-advice/interviewing/computer-science-interview-questions
            </div>
          </li>
          <li>
            <div className={classes.textBlock7}>
              Interview Process: Technical Interview p:
              https://www.amazon.jobs/en/landing_pages/software-development-topics
            </div>
          </li>
          <li>
            <div className={classes.textBlock8}>
              Questions to prepare for
              https://www.indeed.com/career-advice/interviewing/computer-science-interview-questions
            </div>
          </li>
        </ul>
      </div>
      <div className={classes.buildingYourNetworkWithCareerF}>
        <ul className={classes.list3}>
          <li>
            <div className={classes.textBlock9}>
              Building Your Network with Career fairs and virtual/In-Person events
            </div>
          </li>
          <li>
            <div className={classes.textBlock10}>Pinpointing your interests and positions you want</div>
          </li>
          <li>
            <div className={classes.textBlock11}>Adding projects on Github</div>
          </li>
          <li>
            <div className={classes.textBlock12}>Technical Interview Practice</div>
          </li>
        </ul>
      </div>
    </div>
  );
});
