import dayjs from 'dayjs';
import { Time } from '~/core/constants/time';

const formatDate = (date: string, format = Time.DATE_FORMAT) => {
  if (!date) return;
  return dayjs().format(format);
};

export default formatDate;
