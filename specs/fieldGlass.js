fdescribe('Fill out timesheets', function(){
   it('should open app', function(){
      browser.driver.get('https://www.fieldglass.net');
   });
   it ('should select and feed credentials',function(){
      browser.ignoreSynchronization = true;
      var userNameField = $('#usernameId_new');
      var passKey = $('#passwordId_new');
      var signIn = $('#primary_content > div.entryLoginInput_button > button');
      var selectView = $('#viewMenuTitle > a');
      var selectTimesheetMenu = $('#viewMenu_3_timeSheets_link');
      var selectTimeSheet = $('#row0timeSheet_worker_list > div:nth-child(2) > div > a');
      var selectEditTimesheet = $('#detailActionButtons > input');
      var selectMondayTimeIn = $('#timeSheetMainTable > tbody > tr:nth-child(4) > td:nth-child(2)')
      var selectMondayMealBreakOut = $('#timeSheetMainTable > tbody > tr:nth-child(5) > td:nth-child(2)');
      var selectMondayMealBreakIn = $('#timeSheetMainTable > tbody > tr:nth-child(6) > td:nth-child(2)');
      var selectMondayTimeOut = $('#timeSheetMainTable > tbody > tr:nth-child(7) > td:nth-child(2)');
      userNameField.sendKeys('deepan.kumar').then(function(){
         passKey.sendKeys('3Wildworries').then(function () {
            signIn.click().then(function(){
               selectView.click().then(function(){
                  selectTimesheetMenu.click().then(function(){
                     selectTimeSheet.click().then(function(){
                        selectMondayTimeIn.click();
                        selectMondayTimeIn.sendKeys('9:00 AM').then(function(){
                           selectMondayMealBreakIn.sendKeys('12:00 PM').then(function(){
                              selectMondayMealBreakOut.sendKeys('12:30 PM').then(function(){
                                 selectMondayTimeOut.sendKeys('5:30 PM').then(function(){
                                    browser.sleep('5000');
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      });
   });
});