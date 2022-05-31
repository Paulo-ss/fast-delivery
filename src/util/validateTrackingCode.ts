const validateTrackingCode = (code: string) => {
  if (code.length === 0) {
    return undefined;
  }

  if (code.length < 4) {
    return null;
  }

  return true;
};

export default validateTrackingCode;
