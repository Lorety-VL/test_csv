import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const customRound = (num) => Math.round(num * 100) / 100

  const lines = content.split('\r\n');
  const [, ...peoples] = lines;
  const splitted = peoples.map((item) => item.split(','));
  const alive = splitted.filter((item) => item[1] === '1').length;
  const percent = customRound((100 / peoples.length) * alive);
  const male = splitted.filter((item) => item[5] === 'male').length;
  const newMale = peoples.length / male;


  console.log(alive);
  console.log(percent);
  console.log(peoples.length);
  console.log(male);
  console.log(newMale);
  console.log(roundedMale);
  // ssh-keygen -t rsa -C "user.name@mail.domain"
  // END
}
