package com.afferolab.stationarystore.util;

public class Util {

	public static String createMsgJson(String string) {
		StringBuilder sb = new StringBuilder();
		sb.append("{\"message\": \"");
		sb.append(string);
		sb.append("\"}");
		return sb.toString();
	}
}
