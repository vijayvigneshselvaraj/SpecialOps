package com.tcs.leaveTracker.leaveTrackerApi;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.tcs.leaveTracker.leaveTrackerApi.controller.EmployeeController;
import com.tcs.leaveTracker.leaveTrackerApi.entity.Employee;
import com.tcs.leaveTracker.leaveTrackerApi.service.EmployeeService;

@RunWith(SpringRunner.class)
@WebMvcTest(value = EmployeeController.class, secure = false)
public class LeaveTrackerApiApplicationTests {
	
	@Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeService employeeService;

    Employee mockProject = new Employee((long) 1234,"dj", "poc", "fixed");
	

	@Test
	public void getSuccessResponseFromEmployeeGetDetailService() throws Exception{
		
		  Mockito.when(employeeService.getByEmployeeId(Mockito.anyLong())).thenReturn(mockProject);
	        RequestBuilder requestBuilder = MockMvcRequestBuilders
	                .get("/v1/getDetailsByEmployeeId/1234")
	                .accept(MediaType.APPLICATION_JSON);
	        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
	        System.out.println(result.getResponse());
	        String expected = "{\"employeeId\":1234,\"employeeName\":\"dj\",\"squad\":\"poc\",\"billingType\":\"fixed\"}";     
	        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
	}

}
