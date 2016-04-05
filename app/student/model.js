import DS from 'ember-data';

export default DS.Model.extend({
  "ucid": DS.attr('number'),
  "firstName": DS.attr('string'),
  "lastName": DS.attr('string'),
  "major": DS.attr('string'),
  "startDate": DS.attr('date'),
  "ethnicity": DS.attr('string'),
  "highshoolName": DS.attr('string'),
  "isSda": DS.attr('boolean'),
  "bgcheckDate": DS.attr('date'),
  "gpa": DS.attr(),
  "provAutobiography": DS.attr('boolean'),
  "provEduc125": DS.attr('string'),
  "provApplication": DS.attr('boolean'),
  "provObservationHours": DS.attr('number'),
  "provSpeechHearing": DS.attr('boolean'),
  "provMyersBriggs": DS.attr('boolean'),
  "provRef1": DS.attr('boolean'),
  "provRef2": DS.attr('boolean'),
  "provRef3": DS.attr('boolean'),
  "provFelonStatement": DS.attr('date'),
  "provTpcApproval": DS.attr('date'),
  "provComments": DS.attr('string'),
  "diversityObhrs": DS.attr('boolean'),
  "candApplication": DS.attr('boolean'),
  "candInterview": DS.attr('boolean'),
  "candPortfolio": DS.attr('boolean'),
  "candRecommendation": DS.attr('date'),
  "candFelonyStatement": DS.attr('date'),
  "candTpcApproval": DS.attr('date'),
  "candPhilosophyHrs": DS.attr('number'),
  "candEduc218": DS.attr('string'),
  "candEduc225": DS.attr('string'),
  "candComments": DS.attr('string'),
  "candPpstReading": DS.attr(),
  "candPpstWriting": DS.attr(),
  "candPpstMathematics": DS.attr(),
  "candCoreWriting": DS.attr(),
  "candCoreMathematics": DS.attr(),
  "preStudentTeachingAp": DS.attr('boolean'),
  "preRecommendation": DS.attr('boolean'),
  "preBgcheck": DS.attr('boolean'),
  "preOneSourceSub": DS.attr('boolean'),
  "preWorkRequest": DS.attr('boolean'),
  "prePhysicalTbTest": DS.attr('boolean'),
  "prePortfolio": DS.attr('boolean'),
  "prePresessionSt": DS.attr('boolean'),
  "preLearingTheory": DS.attr('boolean'),
  "preGensec": DS.attr('boolean'),
  "preFelonyStatement": DS.attr('date'),
  "preStudentTeachingDate": DS.attr('date'),
  "preTpcApproval": DS.attr('date'),
  "preSpedHrs": DS.attr('number'),
  "preEduc345": DS.attr('string'),
  "preEduc346": DS.attr('string'),
  "preEduc356": DS.attr('string'),
  "preComments": DS.attr('string'),
  "stPortfolio": DS.attr('boolean'),
  "stResume": DS.attr('boolean'),
  "stFelonyStatement": DS.attr('date'),
  "stStartDate": DS.attr('date'),
  "stGradDate": DS.attr('date'),
  "stInitCertDate": DS.attr('date'),
  "stCertApp": DS.attr('boolean'),
  "stPraxIIName": DS.attr('string'),
  "stPraxIIDateTaken": DS.attr('date'),
  "stuPraxIIScore": DS.attr('number'),
  "stFsSchoolName": DS.attr('string'),
  "stuFsTeacherName": DS.attr('string'),
  "stFsDates": DS.attr('date'),
  "stuFsContract": DS.attr('boolean'),
  "stuFsPracticum": DS.attr('boolean'),
  "stuFsCtEval": DS.attr('boolean'),
  "stFsCtrq": DS.attr('boolean'),
  "stSsSchoolName": DS.attr('string'),
  "stSsTeacherName": DS.attr('string'),
  "stSsDates": DS.attr('date'),
  "stSsContract": DS.attr('boolean'),
  "stSsPracticum": DS.attr('boolean'),
  "stSsCtEval": DS.attr('boolean'),
  "stSsCtrq": DS.attr('boolean')
});
