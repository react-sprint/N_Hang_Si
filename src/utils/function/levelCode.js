const levelCode = level => {
  if (level === '지렁이') {
    return 'E';
  }
  if (level === '일반인') {
    return 'N';
  }
  if (level === '박명수') {
    return 'H';
  }
  return null;
};

export default levelCode;
