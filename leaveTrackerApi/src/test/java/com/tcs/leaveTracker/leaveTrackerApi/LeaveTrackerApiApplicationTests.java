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

import com.fasterxml.jackson.databind.ObjectMapper;
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
    Employee updatedEmployee = new Employee((long) 1234,"dj", "poc", "TM");
	

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
	
	@Test
	public void updateEmployeeDetail() throws Exception{
		
		  Mockito.when(employeeService.updateEmployee(Mockito.any())).thenReturn(updatedEmployee);
	        RequestBuilder requestBuilder = MockMvcRequestBuilders
	                .post("/v1/updateEmployeeDetail")
	                .contentType(MediaType.APPLICATION_JSON)
                    .content(asJsonString(updatedEmployee))
	                .accept(MediaType.APPLICATION_JSON);
	        MvcResult result = mockMvc.perform(requestBuilder).andReturn();
	        System.out.println(result.getResponse());
	        String expected = "{\"employeeId\":1234,\"employeeName\":\"dj\",\"squad\":\"poc\",\"billingType\":\"TM\"}";     
	        JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
	}
	
	public static String asJsonString(final Object obj) {
	    try {
	        return new ObjectMapper().writeValueAsString(obj);
	    } catch (Exception e) {
	        throw new RuntimeException(e);
	    }
	}

}
